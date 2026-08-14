type ContactFormFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: string;
  required?: boolean;
  type?: "text" | "email" | "tel" | "date";
  variant?: "input" | "textarea";
  autoComplete?: string;
};

export const ContactFormField = ({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  type = "text",
  variant = "input",
  autoComplete,
}: ContactFormFieldProps) => {
  const errorId = `${name}-error`;

  return (
    <div className="flex flex-col">
      <label className="text-left" htmlFor={name}>
        {label}
        {required && (
          <span className="ml-1 text-sm text-gray-600">(required)</span>
        )}
      </label>
      {variant === "textarea" && (
        <textarea
          id={name}
          className="mb-1 rounded border p-1"
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={4}
          autoComplete={autoComplete}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : undefined}
        ></textarea>
      )}
      {variant === "input" && (
        <input
          id={name}
          className="mb-1 w-full rounded border p-1"
          onChange={onChange}
          value={value}
          name={name}
          required={required}
          type={type}
          autoComplete={autoComplete}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : undefined}
        ></input>
      )}

      {error && (
        <p id={errorId} className="text-left text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
