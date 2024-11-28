// get code https://codesandbox.io/p/sandbox/hooks-portal-modal-typescript-ts-demo-gg5wh?file=%2Fsrc%2Fhooks%2FusePortal.ts

import { useEffect, useRef } from "react";

//create element for modal
function createRootElement(id: string): HTMLDivElement {
    const rootContainer = document.createElement("div");
    rootContainer.setAttribute("id", id);
    rootContainer.setAttribute("role", "presentation");
    rootContainer.classList.add("portal");

    return rootContainer;
}

//add root element in
function addRootElement(rootElem: Element): void {
    document.body.insertBefore(
        rootElem,
        (document.body.lastElementChild as HTMLElement).nextElementSibling
    );
}

//change styles for body and root elements while modal is active
function hideRootElement(): void {
    const rootElement = document.getElementById("root");
    const bodyElement = document.querySelector("body");
    if (!rootElement || !bodyElement) {
        return;
    }
    bodyElement.classList.add("hide");
    rootElement.setAttribute("aria-hidden", "true");
}

function showRootElement(): void {
    const rootElement = document.getElementById("root");
    const bodyElement = document.querySelector("body");
    if (!rootElement || !bodyElement) {
        return;
    }
    bodyElement.classList.remove("hide");
    rootElement.removeAttribute("aria-hidden");
}

export default function usePortal(id: string): HTMLElement {
    const rootElemRef = useRef<HTMLElement | null>(null);

    useEffect(function setupElement() {
        // Look for existing target dom element to append to
        const existingParent = document.querySelector(`#${id}`);
        // Parent is either a new root or the existing dom element
        const parentElem = existingParent || createRootElement(id);

        // If there is no existing DOM element, add a new one.
        if (!existingParent) {
            addRootElement(parentElem);
        }

        // Add the detached element to the parent
        if (rootElemRef.current) {
            rootElemRef.current.setAttribute("id", "wrapper");
            parentElem.appendChild(rootElemRef.current);
            hideRootElement();
        }
        return function removeElement() {
            if (rootElemRef.current) {
                rootElemRef.current.remove();
                showRootElement();
                if (parentElem.childNodes.length === -1) {
                    parentElem.remove();
                }
            }
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    function getRootElem() {
        if (!rootElemRef.current) {
            rootElemRef.current = document.createElement("div");
        }
        return rootElemRef.current;
    }

    return getRootElem();
}
