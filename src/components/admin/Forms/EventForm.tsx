import { Controller, useForm } from "react-hook-form";
import { Event } from "@/types/global";
import { ImageSelector } from "@/components/admin/ImageSelector";
import { DayPicker } from "@/components/admin/DayPicker";
import { TimePeriodSelector } from "@/components/admin/TimePeriodSelector";
import {
  isValidTime,
  isValidDate,
  isValidDescription,
} from "@/utils/validators";
import { LoadingSpinner } from "../LoadingSpinner";
import { InputErrorMessage } from "../InputErrorMessage";
import { Input } from "../Input";
import { Editor } from "../Editor";

interface EventFormProps {
  className?: string;
  event?: Event;
  pending?: boolean;
  onSaveEvent: (event: Event, status: "publish" | "draft") => void;
}

const DEFAULT_EVENT: Event = {
  title: "",
  image: "",
  description: "",
  eventbriteLink: "",
  date: {
    day: "",
    startTime: {
      time: "",
      period: "AM",
    },
    endTime: {
      time: "",
      period: "AM",
    },
  },
};

export const EventForm: React.FC<React.PropsWithChildren<EventFormProps>> = ({
  event = DEFAULT_EVENT,
  pending,
  onSaveEvent,
}) => {
  const {
    register,
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<Event>({
    defaultValues: { ...event },
    mode: "onBlur",
  });

  const onSaveDraft = () => {
    handleSubmit((data) => onSaveEvent(data, "draft"))();
  };

  const onPublish = () => {
    handleSubmit((data) => onSaveEvent(data, "publish"))();
  };

  return (
    <form className="flex flex-col w-full">
      <div className="flex mb-8">
        <div className="flex flex-col w-1/2">
          <div className="mb-4">
            <Input
              register={register}
              options={{ required: "Please add a title" }}
              error={errors.title}
              label="Title"
              name="title"
              type="title"
              placeholder="Event Name"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="uppercase block text-gray-700 text-sm font-bold mb-3">
              Date
            </label>

            <Controller
              name="date.day"
              rules={{ required: true, validate: isValidDate }}
              render={(props) => (
                <DayPicker
                  value={props.field.value}
                  error={errors?.date?.day}
                  onChange={(newDate) => {
                    props.field.onChange(newDate);
                    props.field.onBlur();
                  }}
                />
              )}
              control={control}
            />
          </div>

          <div className="flex mb-4">
            <div className="flex flex-col mr-8">
              <label className="uppercase block text-gray-700 text-sm font-bold mb-3">
                Start Time
              </label>
              <div className="flex">
                <Input
                  register={register}
                  options={{
                    required: "Please add start time",
                    validate: isValidTime,
                  }}
                  error={errors?.date?.startTime?.time}
                  hideErrorMessage
                  name="date.startTime.time"
                  type="text"
                  width="w-24"
                  placeholder="HH:mm"
                />
                <TimePeriodSelector
                  className="ml-2"
                  name="date.startTime.period"
                  register={register}
                />
              </div>
              {errors?.date?.startTime?.time ? (
                <InputErrorMessage
                  message={errors.date.startTime.time.message || ""}
                />
              ) : null}
            </div>

            <div className="flex flex-col">
              <label className="uppercase block text-gray-700 text-sm font-bold mb-3">
                End Time
              </label>
              <div className="flex">
                <Input
                  register={register}
                  options={{
                    required: "Please add end time",
                    validate: isValidTime,
                  }}
                  error={errors?.date?.endTime?.time}
                  hideErrorMessage
                  name="date.endTime.time"
                  type="text"
                  width="w-24"
                  placeholder="HH:mm"
                />
                <TimePeriodSelector
                  className="ml-2"
                  name="date.endTime.period"
                  register={register}
                />
              </div>
              {errors?.date?.endTime?.time ? (
                <InputErrorMessage
                  message={errors.date.endTime.time.message || ""}
                />
              ) : null}
            </div>
          </div>

          <div>
            <Input
              register={register}
              error={errors?.eventbriteLink}
              type="url"
              label="EventBrite Link"
              name="eventbriteLink"
              placeholder="EventBrite Link"
            />
          </div>
        </div>

        <div className="w-1/2 ml-8">
          <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
            Image
          </span>

          <Controller
            name="image"
            rules={{ required: "Please make sure to add an image" }}
            render={(props) => (
              <ImageSelector
                currentImage={props.field.value}
                error={errors?.image}
                onBlur={() => props.field.onBlur()}
                onSelectImage={(image) => {
                  props.field.onChange(image);
                }}
              />
            )}
            control={control}
          />
        </div>
      </div>

      <div className="mb-8">
        <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
          Description
        </span>
        <div>
          <Controller
            control={control}
            name="description"
            rules={{ validate: isValidDescription }}
            render={({ field: { onBlur, onChange, value } }) => (
              <Editor
                value={value}
                error={errors?.description}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </div>
      </div>

      <div className="flex items-center border-t-2 border-slate-300 pt-4 h-24">
        <button
          className="btn-admin btn-primary mr-4"
          type="button"
          onClick={onSaveDraft}
          disabled={pending || !isValid}
        >
          {pending ? <LoadingSpinner /> : "Save Draft"}
        </button>

        <button
          className="btn-admin btn-outlined-primary mr-4"
          type="button"
          onClick={onPublish}
          disabled={pending || !isValid}
        >
          {pending ? <LoadingSpinner /> : "Publish Event"}
        </button>
      </div>
    </form>
  );
};
