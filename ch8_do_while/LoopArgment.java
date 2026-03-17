package ch8_do_while;
public class LoopArgment {
    public static void main(String[] args) {
        int count = 0;
        for (String arg : args) {
            int num = Integer.parseInt(arg);
              if(num % 2 == 0) {
                System.err.println("count :"+ num);
                count += num;
            }
        }
        System.out.println("Sum: " + count);
    }
}
