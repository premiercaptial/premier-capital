"use client";

import { useId, useState, useEffect, ChangeEvent } from "react";

interface InputSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string; // e.g. "₹", "%", "yrs"
  unitPosition?: "prefix" | "suffix";
  onChange: (value: number) => void;
  helperText?: string;
}

/**
 * A labelled range slider kept in lockstep with a typed number field.
 * This is the single input primitive every calculator uses — dragging
 * the gold thumb and typing a precise figure always feel identical.
 */
export function InputSlider({
  label,
  value,
  min,
  max,
  step = 1,
  unit,
  unitPosition = "prefix",
  onChange,
  helperText,
}: InputSliderProps) {
  const id = useId();
  const [inputValue, setInputValue] = useState(String(value));

  useEffect(() => {
    setInputValue(String(value));
  }, [value]);

  const percent = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  function commitNumber(raw: string) {
    const parsed = Number(raw.replace(/,/g, ""));
    if (Number.isNaN(parsed)) return;
    const clamped = Math.min(max, Math.max(min, parsed));
    onChange(clamped);
  }

  function handleSliderChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(Number(e.target.value));
  }

  function handleNumberChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleNumberBlur() {
    commitNumber(inputValue || String(min));
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={`${id}-number`} className="font-body text-sm font-medium text-navy">
          {label}
        </label>

        <div className="flex items-center rounded-lg border border-border bg-background focus-within:border-gold focus-within:ring-1 focus-within:ring-gold/40 transition-colors">
          {unit && unitPosition === "prefix" && (
            <span className="pl-3 font-mono text-sm text-navy/50">{unit}</span>
          )}
          <input
            id={`${id}-number`}
            type="text"
            inputMode="decimal"
            value={inputValue}
            onChange={handleNumberChange}
            onBlur={handleNumberBlur}
            onKeyDown={(e) => e.key === "Enter" && commitNumber(inputValue)}
            className="w-24 bg-transparent px-2 py-1.5 text-right font-mono text-sm font-medium text-navy outline-none tabular-nums"
            aria-describedby={helperText ? `${id}-helper` : undefined}
          />
          {unit && unitPosition === "suffix" && (
            <span className="pr-3 font-mono text-sm text-navy/50">{unit}</span>
          )}
        </div>
      </div>

      <div className="relative flex items-center py-1">
        <div className="relative h-1.5 w-full rounded-full bg-navy/10">
          <div
            className="absolute h-1.5 rounded-full bg-gold transition-[width] duration-150 ease-premium"
            style={{ width: `${percent}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSliderChange}
          aria-label={label}
          className="premium-slider absolute inset-0 h-1.5 w-full cursor-pointer appearance-none bg-transparent"
        />
      </div>

      <div className="flex items-center justify-between font-mono text-[11px] text-navy/40">
        <span>
          {unit && unitPosition === "prefix" ? unit : ""}
          {min.toLocaleString("en-IN")}
          {unit && unitPosition === "suffix" ? unit : ""}
        </span>
        {helperText && (
          <span id={`${id}-helper`} className="font-body text-navy/50">
            {helperText}
          </span>
        )}
        <span>
          {unit && unitPosition === "prefix" ? unit : ""}
          {max.toLocaleString("en-IN")}
          {unit && unitPosition === "suffix" ? unit : ""}
        </span>
      </div>

      {/* Thumb styling lives here since Tailwind can't target ::-webkit-slider-thumb
         via utility classes alone. Kept local to this component on purpose. */}
      <style jsx>{`
        .premium-slider::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #ffffff;
          border: 2.5px solid #c6a15b;
          box-shadow: 0 2px 8px rgba(11, 31, 58, 0.18);
          cursor: pointer;
          transition: transform 150ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 150ms;
        }
        .premium-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 4px 14px rgba(198, 161, 91, 0.4);
        }
        .premium-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #ffffff;
          border: 2.5px solid #c6a15b;
          box-shadow: 0 2px 8px rgba(11, 31, 58, 0.18);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
