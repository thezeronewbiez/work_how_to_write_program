package ch8_do_while;
import java.util.Scanner;
public class DoWhile{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int number = 50;
        int number2 = 10;
        int result = 0;
        int choice;
        do{
            System.out.println("1. Add");
            System.out.println("2. Multiply");
            System.out.println("3. Subtract");
            System.out.println("0. Exit");
            System.out.println("please enter your choice(number): ");
            choice = input.nextInt();
            result = switch(choice) {
                case 1 -> number + number2;
                case 2 -> number * number2;
                case 3 -> number - number2;
                default -> 0;
            };
            System.out.println("Result: " + result);
        }while(choice != 0);
    }
}
