import { type ComponentProps } from "solid-js"

export const Mark = (props: { class?: string }) => {
  return (
    <svg
      data-component="logo-mark"
      classList={{ [props.class ?? ""]: !!props.class }}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path data-slot="logo-logo-mark-shadow" d="M12 16H4V8H12V16Z" fill="var(--icon-weak-base)" />
      <path data-slot="logo-logo-mark-o" d="M12 4H4V16H12V4ZM16 20H0V0H16V20Z" fill="var(--icon-strong-base)" />
    </svg>
  )
}

export const Splash = (props: Pick<ComponentProps<"svg">, "ref" | "class">) => {
  return (
    <svg
      ref={props.ref}
      data-component="logo-splash"
      classList={{ [props.class ?? ""]: !!props.class }}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M60 80H20V40H60V80Z" fill="var(--icon-base)" />
      <path d="M60 20H20V80H60V20ZM80 100H0V0H80V100Z" fill="var(--icon-strong-base)" />
    </svg>
  )
}

export const Logo = (props: { class?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 144 42"
      fill="none"
      classList={{ [props.class ?? ""]: !!props.class }}
    >
      <g>
        {/* e */}
        <path d="M24 24V30H6V24H24Z" fill="var(--icon-weak-base)" />
        <path d="M24 24H6V30H24V36H0V6H24V24ZM6 18H18V12H6V18Z" fill="var(--icon-base)" />
        {/* c */}
        <path d="M54 30H36V18H54V30Z" fill="var(--icon-weak-base)" />
        <path d="M54 12H36V30H54V36H30V6H54V12Z" fill="var(--icon-base)" />
        {/* o */}
        <path d="M78 30H66V18H78V30Z" fill="var(--icon-weak-base)" />
        <path d="M78 12H66V30H78V12ZM84 36H60V6H84V36Z" fill="var(--icon-base)" />
        {/* d */}
        <path d="M108 30H96V18H108V30Z" fill="var(--icon-weak-base)" />
        <path d="M108 12H96V30H108V12ZM114 36H90V6H108V0H114V36Z" fill="var(--icon-base)" />
        {/* e */}
        <path d="M144 24V30H126V24H144Z" fill="var(--icon-weak-base)" />
        <path d="M126 12V18H138V12H126ZM144 24H126V30H144V36H120V6H144V24Z" fill="var(--icon-base)" />
      </g>
    </svg>
  )
}
