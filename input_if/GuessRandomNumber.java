package input_if;
import java.util.Scanner;
import java.util.Random;

public class GuessRandomNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int randomNumber = random.nextInt(100) + 1;
        int attempts = 0;
        int guess = 0;
        int Score = 100;

        System.out.println("ยินดีต้อนรับสู่เกมเดาหมายเลข!");
        System.out.println("ฉันได้เลือกหมายเลขสุ่มระหว่าง 1 ถึง 100 คุณสามารถเดาได้หรือไม่?");

        while (guess != randomNumber) {
            System.out.print("ป้อนคำตอบของคุณ: ");
            guess = scanner.nextInt();
            attempts++;

            if (guess < randomNumber) {
                System.out.println("ต่ำไป! ลองใหม่อีกครั้ง.");
            } else if (guess > randomNumber) {
                System.out.println("สูงไป! ลองใหม่อีกครั้ง.");
            } else {
                System.out.println("-------------------------------");
                System.out.println("ยินดีด้วย! คุณเดาหมายเลขถูกต้องแล้ว! \nจำนวนครั้งที่คุณเดาคือ: " + attempts);
                Score -= attempts;
                System.out.println("คะแนนของคุณคือ: " + Score);
                System.out.println("-------------------------------");
            }
        }

        scanner.close();
    }
}