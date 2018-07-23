/**
 * @ProjectName: SCJBTJ
 * @Package: PACKAGE_NAME
 * @ClassName: regexTest
 * @Description: java类作用描述
 * @Author: Bush
 * @CreateDate: 2018/6/27 12:01
 * @Version: 1.0
 */
import java.util.regex.*;

class Main
{
    public static void main(String[] args)
    {
        String txt="JC17_510103";

        String re1=".*?";	// Non-greedy match on filler
        String re2="\\d+";	// Uninteresting: int
        String re3=".*?";	// Non-greedy match on filler
        String re4="(\\d+)";	// Integer Number 1

        Pattern p = Pattern.compile(re1+re2+re3+re4,Pattern.CASE_INSENSITIVE | Pattern.DOTALL);
        Matcher m = p.matcher(txt);
        if (m.find())
        {
            String int1=m.group(1);
            //System.out.print(int1.toString());
        }

        String ss="V_HYDA,V_HYDL,V_LCRA,V_LCTL,V_LLKL,V_LRDL,V_LVLL";
        String[] ops = ss.split(",");
        System.out.println(ops[0]);
    }
}