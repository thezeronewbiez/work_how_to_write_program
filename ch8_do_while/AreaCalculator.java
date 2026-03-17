package ch8_do_while;
public class AreaCalculator {
    public static void main(String[] args) {

        int area = 0;

        Rectangle r1 = new Rectangle();
        area = r1.calculateArea();
        IO.println("Rectangle Area: " + area);

    }
}