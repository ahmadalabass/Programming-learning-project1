
const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Cincinnati",
          desc:
            "Python is a programming language widely used in network applications, software development, data science, and machine learning (ML). Developers use Python because it is efficient, easy to learn, and can run on many different platforms.",
          photo:
            "https://w0.peakpx.com/wallpaper/185/1/HD-wallpaper-python-coding-programming.jpg"
        },
        {
          id: 2,
          title: "Daytona",
          desc:
            "Java is a general-purpose, object-oriented, and platform-independent programming language, which means that Java programs can run on any device that supports Java .",
          photo:
            "https://play-lh.googleusercontent.com/gSvS4Npz1pg8C4OFlZtxdPgbOwFgB5xyEh9VhCLCtvYvgqKAY-dPVTMyiDELjwCeQg"
        },
        {
          id: 3,
          title: "Indiana",
          desc:
            "C# is a programming language designed to run on the Common Language Infrastructure (CLI). C# is designed to be a simple, modern, general-purpose, object-oriented language.",
          photo:
            "https://c4.wallpaperflare.com/wallpaper/182/470/396/code-wallpaper-preview.jpg"
        },
        {
          id: 4,
          title: "Amarillo",
          desc:
            "C++ is an extension of the C programming language, adding object-oriented programming features such as objects and classes. The language allows programmers to write programs with high performance and memory efficiency, and it is also used in developing operating systems, software applications, video games, embedded software, and other applications.",
          photo:
            "https://c4.wallpaperflare.com/wallpaper/935/690/342/c-plus-plus-c-code-wallpaper-preview.jpg"
        }
      ],
      currentNum: 0
    };
  },
  computed: {
    currentCard() {
      return this.cards[this.currentNum];
    }
  },
  methods: {
    playFoward() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.out"
        },
        onComplete: () => {
          this.playReverse();
          if (this.currentNum >= 3) {
            this.currentNum = 0;
          } else {
            this.currentNum++;
          }
        }
      });
      tl.to("#mask-1", {
        yPercent: 100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: -100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.4"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.3"
        );
    },
    playReverse() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.in"
        }
      });
      tl.to("#mask-1", {
        yPercent: -100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: 100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.2"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.3"
        );
    },
    nextCard() {
      this.playFoward();
    }
  }
}).mount("#app");

