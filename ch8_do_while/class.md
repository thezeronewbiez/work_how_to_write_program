# Class Diagram (Java)

Below is a simple class diagram representing the key classes in this workspace using Mermaid syntax.

```mermaid
classDiagram
    class Rectangle {
        -int width
        -int height
        +Rectangle()
        +void setWidth(int width)
        +void setHeight(int height)
        +int calculateArea()
        +int calculatePerimeter()
    }

    class AreaCalculator {
        +static void main(String[] args)
    }

    class LoopArgment {
        +static void main(String[] args)
    }

    AreaCalculator --> Rectangle : uses
```

> 💡 **Tip:** Render Mermaid diagrams in supported Markdown viewers (e.g., VS Code with Mermaid extension).
