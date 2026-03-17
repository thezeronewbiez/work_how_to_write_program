package input_if;
public class SwitchIf_else {
    public static void main(String[] args) {

        int day = 3;
        String dayString;
        if (day == 1) {
            dayString = "Monday";
        } else if (day == 2) {
            dayString = "Tuesday";
        } else if (day == 3) {
            dayString = "Wednesday";
        } else if (day == 4) {
            dayString = "Thursday";
        } else if (day == 5) {
            dayString = "Friday";
        } else if (day == 6) {
            dayString = "Saturday";
        } else if (day == 7) {
            dayString = "Sunday";
        } else {
            dayString = "Invalid day";
        }
        System.out.println(dayString);
    }
}