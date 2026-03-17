package ch8_do_while;
import java.util.Scanner;

public class InputValidate {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your age (0-150): ");
        int age = scanner.nextInt();
        if (age < 0 || age > 150) {
            System.out.println("Invalid age");
        } else {
            System.out.println("Register successfully \n Your age is: " + age);
        }
    }
}