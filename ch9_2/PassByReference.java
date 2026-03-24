public class PassByReference{
    public static void main(String[] args){

        Data x = new Data();
        x.number = 1000;

        addNumber(x);

        IO.println("X " +x.number);

        Hello.greeting();
    }

    public static void addNumber(Data data){
        data.number++;
    }
}