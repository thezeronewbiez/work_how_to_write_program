package input_if;
import java.time.LocalDate;
import java.util.Scanner;
import java.util.InputMismatchException;

public class Vote {
    public static void main(String[] args) {
        String setvote;
        Scanner scanner = new Scanner(System.in);
        try {
            System.out.print("Enter your name: ");
            String name = scanner.nextLine();

            System.out.print("Enter your gender: (M for Male, F for Female): ");
            char genderChar = scanner.next().charAt(0);
            boolean gender = (genderChar == 'M' || genderChar == 'm');

            System.out.print("Enter your birth year: ");
            int birthYear = scanner.nextInt();

            int currentYear = LocalDate.now().getYear();
            int age = currentYear - birthYear;

            if (age >= 18 && gender == true) {
                setvote = "You can Vote And serve nation";
            } else if (age >= 18) {
                setvote = "You can Vote";
            } else {
                setvote = "You cannot Vote";
            }
            System.out.println("Your name is: " + name);
            System.out.println("Your gender is: " + (gender ? "Male" : "Female"));
            System.out.println("Your age is: " + age);
            System.err.println(setvote);
        } catch (InputMismatchException e) {
            System.err.println("Invalid input. Please enter valid data.");
        } catch (Exception e) {
            System.err.println("An error occurred: " + e.getMessage());
        } finally {
            scanner.close();
        }
    }
}