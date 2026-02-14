/// <reference types="vite/client" />

declare module '*.jpg?url' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png?url' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.gif?url' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}
