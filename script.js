const app = Vue.createApp({
    data() {
        return {
            headline: "Attribute Binding is awesome",
            imgAttrs: {
                class: "border-primary",
                src: "https://picsum.photos/800/600",
                alt: "Something random Pitcure ",
            },
        };
    },
}).mount("#app");