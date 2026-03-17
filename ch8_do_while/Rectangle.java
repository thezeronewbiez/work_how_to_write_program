package ch8_do_while;
public class Rectangle {
    private int width;
    private int height;

    public Rectangle(){
        this.width = 5;
        this.height = 4;
    }
    public void setWidth(int width) {
        this.width = width ;
    }
    public void setHeight(int height) {
        this.height = height;
    }
    public int calculateArea() {
        return this.width * this.height;
    }

    public int calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
