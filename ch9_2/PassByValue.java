public class PassByValue{
    public static void main(String[] args){
        int x = 1000;
        addNumber(x);
        IO.println("X " +x);
        Foo f1 = new Foo();
        f1.total = 10;
        f1.addTotal();
        System.out.println(f1.total);
        Foo f2 = new Foo();
        f2.addTotal();
        System.out.println(f2.total);
    }

    public static void addNumber(int number){
        number++;
    }
}