package input_if;
public class For {
    public static void main(String[] args) {
        for (int i = 1; i <= 500000; i++) {
            if (i % 2 == 0)
                System.out.println("Hello, World! " + i);
        }
    }
}
