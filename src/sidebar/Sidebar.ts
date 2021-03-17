export interface SidebarButton {
  label: string
  level: 1 | 2
  icon?: string
  name?: string
}

export interface IHeader {
  icon: string
  label: string
}

export interface SidebarProps {
  container: HTMLElement
  header: IHeader
  content: SidebarButton[]
  footerLabel: string,
  onSelected?: (selected:HTMLElement) => void
}

export interface ISidebar {
  destroy: () => void
}

class Sidebar implements ISidebar {
  #_container
  #_header
  #_content
  #_footer
  #_contentList:{[key: string]: HTMLElement}  = {}
  #_onSelected = (selected:HTMLElement) => {}

  constructor({container, header, content, footerLabel, onSelected}: SidebarProps) {
    if(onSelected) this.#_onSelected = onSelected

    this.#_initialize(container, header, content, footerLabel)
  }

  #_initialize  = (container: HTMLElement, header: IHeader, content: SidebarButton[], footerLabel: string) => {
    this.#_container = container
    this.#_container.classList.add('sidebar')

    this.#_header = document.createElement('div')
    this.#_header.classList.add('sidebar-btn', 'sidebar-btn-l0')

    this.#_content = document.createElement('div')
    this.#_content.classList.add('sidebar-content')

    this.#_footer = document.createElement('div')
    this.#_footer.classList.add('sidebar-btn-footnote')

    this.#_container.appendChild(this.#_header)
    this.#_container.appendChild(this.#_content)
    this.#_container.appendChild(this.#_footer)

    const h_icon = document.createElement('span')
    const h_label = document.createElement('p')
    h_icon.classList.add(`i-${header.icon}`, 'sidebar-btn-icon')
    h_label.classList.add('sidebar-btn-label')
    h_label.innerText = header.label

    this.#_header.appendChild(h_icon)
    this.#_header.appendChild(h_label)

    content.map((el, i) => {
      const id = `${i}-${el.level}-${el.label}`
      const child = document.createElement('button')
      child.id = id
      child.name = el.name ||  ''
      child.classList.add('sidebar-btn', `sidebar-btn-l${el.level}`)
      this.#_contentList[id] = child
      let icon
      if(el.icon) {
        icon = document.createElement('span')
        icon.classList.add(`i-${el.icon}`, 'sidebar-btn-icon')
        child.appendChild(icon)
      }

      const label = document.createElement('p')
      label.classList.add('sidebar-btn-label')
      label.innerText = el.label

      child.appendChild(label)
      child.addEventListener('click', this.#_clickHandler)

      this.#_content.appendChild(child)
    })

    const f_label = document.createElement('p')
    f_label.classList.add('sidebar-btn-label')
    f_label.innerText = footerLabel

    this.#_footer.appendChild(f_label)
  }

  #_clickHandler = (e) => {
    const target = e.currentTarget

    Object.values(this.#_contentList).map((el: HTMLElement) => el.classList.remove('selected'))
    target.classList.add('selected')
    
    this.#_onSelected(target)
  }

  destroy = () => {
    this.#_container.removeChild(this.#_header)
    this.#_container.removeChild(this.#_content)
    this.#_container.removeChild(this.#_footer)

    Object.values(this.#_contentList).map(el => el.removeEventListener('click', this.#_clickHandler))

    this.#_contentList = {}
    this.#_header = null
    this.#_content = null
    this.#_footer = null

    this.#_container = null
  }
}

export {Sidebar}