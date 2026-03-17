package ch8_do_while;
public class ForEach {
    public static void main(String[] args) {
        double[] scores = { 85.5, 90.0, 78.0, 92.5, 88.0 };
        for (int i = 0; i < scores.length; i++) {
            System.out.println("Score:" + scores[i]);
        }

        double[] points = { 10.0, 20.0, 30.0, 40.0, 50.0 };
        for (double point : points) {
            System.out.println("Point: " + point);
        }
    }
}