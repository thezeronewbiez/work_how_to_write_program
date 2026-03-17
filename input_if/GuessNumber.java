package input_if;
import java.util.Scanner;

public class GuessNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numberToGuess = 42; // ตัวเลขที่ต้องการให้ผู้เล่นเดา
        int userGuess = 0;

        System.out.println("ยินดีต้อนรับสู่เกมเดาหมายเลข!");
        System.out.println("ฉันได้เลือกหมายเลขระหว่าง 1 ถึง 100 คุณสามารถเดาได้หรือไม่?");

        while (userGuess != numberToGuess) {
            System.out.print("ป้อนคำตอบของคุณ: ");
            userGuess = scanner.nextInt();

            if (userGuess < numberToGuess) {
                System.out.println("ต่ำไป! ลองใหม่อีกครั้ง.");
            } else if (userGuess > numberToGuess) {
                System.out.println("สูงไป! ลองใหม่อีกครั้ง.");
            } else {
                System.out.println("ยินดีด้วย! คุณเดาหมายเลขถูกต้องแล้ว!");
            }
        }

        scanner.close();
    }
}
