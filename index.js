class DraggableElement extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        // react/vue will load this file before render the dom
        // so move this part to this lifecycle function in order to get the final dom
        const style = document.createElement('style');
        style.innerHTML = `:host {display: block;}`;
        const slot = document.createElement('slot');
        this.root.appendChild(slot);
        this.root.appendChild(style);
        this.setAttribute('draggable', 'true');
        this.addEventListener('dragstart', dragStarHandler);
        this.addEventListener('dragover', dragOverHandler);
        this.addEventListener('drop', dropHandler);
    }
}
function dragStarHandler(event) {
    var _a;
    event.dataTransfer.setData('application/my-app', (_a = event.target) === null || _a === void 0 ? void 0 : _a.id);
    event.dataTransfer.effectAllowed = 'move';
}
function dragOverHandler(event) {
    event.preventDefault();
    event.dropEffect = 'move';
}
function dropHandler(event) {
    event.preventDefault();
    let dropEl = event.target;
    let dragElNextSibling;
    let dragElPreviousSibling;
    let dragEl;
    // Get the id of the target and add the moved element to the target's DOM
    const data = event.dataTransfer.getData("application/my-app");
    dragEl = document.getElementById(data);
    if (dragEl.nextElementSibling) {
        dragElNextSibling = dragEl.nextElementSibling;
    }
    else {
        dragElPreviousSibling = dragEl.previousElementSibling;
    }
    // if the drop element has the same parent node with the drag element
    if (dropEl.parentNode === dragEl.parentNode) {
        // switch postion of the drag element and drop element
        dropEl.parentNode.replaceChild(dragEl, dropEl);
        if (dragElNextSibling) {
            // swich between the siblings
            if (dragElNextSibling === dropEl) {
                dragEl.parentNode.insertBefore(dropEl, dragEl);
            }
            else {
                dragEl.parentNode.insertBefore(dropEl, dragElNextSibling);
            }
        }
        else {
            dragEl.parentNode.insertBefore(dropEl, null);
        }
    }
    else {
        dropEl.parentNode.insertBefore(dragEl, dropEl);
        dropEl.parentNode.removeChild(dropEl);
        if (dragElNextSibling) {
            dragElNextSibling.parentNode.insertBefore(dropEl, dragElNextSibling);
        }
        else {
            dragElPreviousSibling.parentNode.insertBefore(dropEl, null);
        }
    }
}
customElements.define('draggable-element', DraggableElement);
