public class AuthService {
    public static boolean login(String user, String pass) {
        return user.equals("admin") && pass.equals("123");
    }
}
