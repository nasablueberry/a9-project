import React from 'react';
"use client";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio@1.1.2";
function AspectRatio({ ...props }) {
    return React.createElement(AspectRatioPrimitive.Root, { "data-slot": "aspect-ratio", ...props });
}
export { AspectRatio };
