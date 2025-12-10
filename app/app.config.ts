export default defineAppConfig({
  ui: {
    header: {
      slots: {
        body: 'flex flex-col items-center gap-6',
      }
    },
    button: {
      slots: {
        base: 'rounded-full',
      }
    },
    pageHero: {
      slots: {
        root: 'relative',
        container: 'bg-[url(/hero/logo.svg)] bg-no-repeat bg-position-[center_clamp(40px,10dvw,50px)] bg-size-[auto_48px]',
        title: 'font-serif text-primary',
        description: 'text-primary',
      }
    },
    pageSection: {
      slots: {
        title: 'text-primary font-serif',
        description: 'text-primary',
      }
    },
    pageCard: {
      slots: {
        title: 'font-serif',
        leading: 'text-primary',
      },
      variants: {
        variant: {
          solid: {
            root: 'bg-primary',
            title: 'font-serif',
            description: 'text-white',
            leadingIcon: 'text-white'
          },
          naked: {
            title: 'text-primary',
            description: 'text-primary',
          }
        }
      }
    },
    blogPost: {
      variants: {
        variant: {
          soft: {
            root: 'bg-primary',
            title: 'font-serif text-white',
            description: 'text-white',
            date: 'text-white'
          }
        }
      }
    },
    formField: {
      slots: {
        label: 'text-primary',
      }
    },
    input: {
      slots: {
        root: 'w-full',
        base: 'rounded-full'
      }
    },
    checkbox: {
      slots: {
        base: 'rounded-full',
      }
    },
    toast: {
      slots: {
        title: 'font-serif',
        description: 'text-primary'
      }
    },
    footer: {
      slots: {
        root: 'bg-primary',
        right: 'flex flex-col md:flex-row'
      }
    },
  }
})
