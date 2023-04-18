// ------------- Task 1 -----------
class CssClass {
    constructor(ClassName, Styles) {
        this.ClassName = ClassName;
        this.StylesArray = Styles;
    }

    styleAdd() {
        let n = +prompt("Enter the number of styles you want to add:");

        for(let i=0; i<n; i++) {
            let key = prompt("Enter name of property for class style:");
            StyleArray[key] = prompt("Enter the value:");
        }
    }

    styleDel() {
        let name = prompt("Enter the name of style you want to delete:");
        Object.keys(this.StylesArray).forEach(key => {
            if(key === name) {
                delete StyleArray[key];
            }
        })
    }

    getCSS() {
        document.write(`<p>.${this.ClassName}{</p>`);
        
        Object.keys(this.StylesArray).forEach(key => {
            document.write(`<p>${key}: ${this.StylesArray[key]}</p>`);
        })
        document.write(`<p>}</p>`);
    }
}

let StyleArray = {};
let center = new CssClass("center", StyleArray);

console.log(center);

center.styleAdd();
center.styleDel();
center.getCSS();

// ------------- Task 2 -----------
class Button {
    constructor(width, height, text) {
        this.buttonWidth = width;
        this.buttonHeight = height;
        this.buttonText = text;
    }

    showBtn() {
        document.write(`<button class="button"></button>`);
    }
}

let buttonHTML = new Button(65, 30, "Agree");

console.log(buttonHTML);
buttonHTML.showBtn();

class BootstrapButton extends Button {
    constructor(width, height, text, color) {
        super(width, height, text);
        this.buttonColor = color;
    }

    showBtn() {
        super.showBtn();
        let styleSheet = document.createElement("style");
        let styles = `
        button{
            min-width: ${this.buttonWidth}px;
            min-height: ${this.buttonHeight}px;
            background-color: ${this.buttonColor};
            }
            button:after{
                content: "${this.buttonText}";
        }
        `;
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
    }
}

let styledButton = new BootstrapButton(65, 30, "Agree", "green");
styledButton.showBtn();
console.log(styledButton);