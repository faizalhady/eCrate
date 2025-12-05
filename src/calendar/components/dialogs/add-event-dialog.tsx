"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useCalendar } from "@/calendar/contexts/calendar-context";
import { useDisclosure } from "@/hooks/use-disclosure";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SingleDayPicker } from "@/components/ui/single-day-picker";
import { TimeInput } from "@/components/ui/time-input";

import { eventSchema } from "@/calendar/schemas";

import type { TEventFormData } from "@/calendar/schemas";
import type { TimeValue } from "react-aria-components";

interface IProps {
  children: React.ReactNode;
  startDate?: Date;
  startTime?: { hour: number; minute: number };
}

export function AddEventDialog({ children, startDate, startTime }: IProps) {
  const { users } = useCalendar();

  const { isOpen, onClose, onToggle } = useDisclosure();

  const form = useForm<TEventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      description: "",
      startDate: typeof startDate !== "undefined" ? startDate : undefined,
      startTime: typeof startTime !== "undefined" ? startTime : undefined,
    },
  });

  const onSubmit = (_values: TEventFormData) => {
    // TO DO: Create use-add-event hook
    onClose();
    form.reset();
  };

  useEffect(() => {
    form.reset({
      startDate,
      startTime,
    });
  }, [startDate, startTime, form]);

  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Booking</DialogTitle>
          <DialogDescription>
            <AlertTriangle className="mr-1 inline-block size-4 text-yellow-500" />
            This form will create a new crating booking. Please ensure all details are accurate before submitting.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form id="event-form" onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="user"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Workcell</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger data-invalid={fieldState.invalid}>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>

                      <SelectContent>
                        {users.map(user => (
                          <SelectItem key={user.id} value={user.id} className="flex-1">
                            <div className="flex items-center gap-2">
                              <Avatar key={user.id} className="size-6">
                                <AvatarImage src={user.picturePath ?? undefined} alt={user.name} />
                                <AvatarFallback className="text-xxs">{user.name[0]}</AvatarFallback>
                              </Avatar>

                              <p className="truncate">{user.name}</p>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="title"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel htmlFor="title">Serial Number</FormLabel>

                  <FormControl>
                    <Input id="title" placeholder="Enter assembly serial number" data-invalid={fieldState.invalid} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-start gap-2">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel htmlFor="startDate">Start Date</FormLabel>

                    <FormControl>
                      <SingleDayPicker
                        id="startDate"
                        value={field.value}
                        onSelect={date => field.onChange(date as Date)}
                        placeholder="Select a date"
                        data-invalid={fieldState.invalid}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startTime"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Start Time</FormLabel>

                    <FormControl>
                      <TimeInput value={field.value as TimeValue} onChange={field.onChange} hourCycle={12} data-invalid={fieldState.invalid} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-start gap-2">
              <FormField
                control={form.control}
                name="endDate"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                      <SingleDayPicker
                        value={field.value}
                        onSelect={date => field.onChange(date as Date)}
                        placeholder="Select a date"
                        data-invalid={fieldState.invalid}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endTime"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>End Time</FormLabel>

                    <FormControl>
                      <TimeInput value={field.value as TimeValue} onChange={field.onChange} hourCycle={12} data-invalid={fieldState.invalid} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-start gap-2">
              <FormField
                control={form.control}
                name="color"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Vendors</FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger data-invalid={fieldState.invalid}>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="blue">
                            <div className="flex items-center gap-2">
                              <div className="size-3.5 rounded-full bg-blue-600" />
                              Awanpack
                            </div>
                          </SelectItem>

                          <SelectItem value="green">
                            <div className="flex items-center gap-2">
                              <div className="size-3.5 rounded-full bg-green-600" />
                              Berjayapak
                            </div>
                          </SelectItem>

                          <SelectItem value="red">
                            <div className="flex items-center gap-2">
                              <div className="size-3.5 rounded-full bg-red-600" />
                              Enapak
                            </div>
                          </SelectItem>

                          <SelectItem value="yellow">
                            <div className="flex items-center gap-2">
                              <div className="size-3.5 rounded-full bg-yellow-600" />
                              Transpak
                            </div>
                          </SelectItem>

                          <SelectItem value="purple">
                            <div className="flex items-center gap-2">
                              <div className="size-3.5 rounded-full bg-purple-600" />
                              Nefab
                            </div>
                          </SelectItem>

                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="color"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Crating Zone</FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger data-invalid={fieldState.invalid}>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="blue">
                            <div className="flex items-center gap-2">
                              <div className="size-3.5 rounded-full bg-blue-600" />
                              Zone A
                            </div>
                          </SelectItem>

                          <SelectItem value="green">
                            <div className="flex items-center gap-2">
                              <div className="size-3.5 rounded-full bg-green-600" />
                              Zone B
                            </div>
                          </SelectItem>

                          <SelectItem value="red">
                            <div className="flex items-center gap-2">
                              <div className="size-3.5 rounded-full bg-red-600" />
                              Zone C
                            </div>
                          </SelectItem>

                          <SelectItem value="yellow">
                            <div className="flex items-center gap-2">
                              <div className="size-3.5 rounded-full bg-yellow-600" />
                              Zone D
                            </div>
                          </SelectItem>

                          <SelectItem value="purple">
                            <div className="flex items-center gap-2">
                              <div className="size-3.5 rounded-full bg-purple-600" />
                              Zone E
                            </div>
                          </SelectItem>

                          <SelectItem value="orange">
                            <div className="flex items-center gap-2">
                              <div className="size-3.5 rounded-full bg-orange-600" />
                              Zone F
                            </div>
                          </SelectItem>

                          <SelectItem value="gray">
                            <div className="flex items-center gap-2">
                              <div className="size-3.5 rounded-full bg-neutral-600" />
                              Zone G
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* <FormField
              control={form.control}
              name="description"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>

                  <FormControl>
                    <Textarea {...field} value={field.value} data-invalid={fieldState.invalid} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </form>
        </Form>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>

          <Button form="event-form" type="submit">
            Create Event
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
