export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

export const getCurrentSection = (sections: string[], offset: number = 100): string => {
  const scrollPosition = window.scrollY + offset;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const element = document.getElementById(section);
    
    if (element && scrollPosition >= element.offsetTop) {
      return section;
    }
  }

  return sections[0];
};