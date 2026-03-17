package input_if;
public class SwitchChar {
    public static void main(String[] args) {
        char gender = 'M';
        String genderString;

        switch (gender) {
            case 'M', 'm':
                genderString = "Male";
                break;
            case 'F', 'f':
                genderString = "Female";
                break;
            default:
                genderString = "LGBTQ+";
        }
        System.out.println(genderString);
    }
}