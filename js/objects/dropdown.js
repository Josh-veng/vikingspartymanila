export class Dropdown {
    toggleDropdown = () => {
        const dropdownComponent = document.querySelector(".dropdown")
        const hasHideClass = dropdownComponent.classList.contains('hide')
        if(hasHideClass) {
            dropdownComponent.classList.remove('hide')
            return
        }
        dropdownComponent.classList.add('hide')
    }
}