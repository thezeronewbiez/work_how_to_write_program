package ch8_do_while;
public class BreakContinue {
    public static void main(String[] args){
        for(int i=1; i<=10; i++){
            if(i % 2 == 0){
                continue; // skip the rest of the loop body when i is even
            }
            System.out.println("i: " + i);
        }
    }
}
