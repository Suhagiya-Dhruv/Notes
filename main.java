/* loop

switch

for loop
while
do while


array
stack => LIFO => last in first out
queue => FIFO => first in first out

 */

class Loop {

    public static void main(String[] args) {

//        int a = 10;
//        int b = 15;
//        char c = '+';
//
//        switch(c){
//            case '+': System.out.println(a+b);
//                    break;
//            case '-': System.out.println(a-b);
//                    break;
//            case '*': System.out.println(a*b);
//                 break;
//            case '/': System.out.println(a/b);
//                    break;
//            default : System.out.println("Invalid value");
//                    break;
//        }
//        if (c == '*') {
//            System.out.println(a * b);
//        } else if (c == '+') {
//            System.out.println(a + b);
//        } else if (c == '-') {
//            System.out.println(a - b);
//        } else if (c == '/') {
//            System.out.println(a / b);
//        }
//        System.out.println("Outside");
        // value assign ; condition ; inc/dec
//        for (int i = 0; i < 5; i++) {
//            System.out.println("I :"+i);
//        }
//        for (int i = 5; i >= 0;i--) { // 5>0; 4>0
//            System.out.println(i);
//            
////            i = i+2;
//        }
// condition
//        int a = 1;
//        while (a < 10) {  // 15 < 10
//            System.out.println(a);  // 1 , 3 , 7
//            a *= 2; // a = 1*2 = 2 =6 = 14
//            System.out.println(a); // 2 , 6 , 14
//            a++; // 3, 7, 15
//        }
        // 1, 2, 3 ,6, 7,14
//      int a = 1;
//      do{
//          System.out.println(a);
//          a++; 
//      }while(a < 10); // 2<5, 3<5, 4<5, 5<5
        // 1,2,3,6,7
        // 
        //
        /*
        
        i = 0 -> i < 5 => T
                Hello
        i++; -> i = i+1
        
        
        i = 1 -> i< 5 => T
                Hello
        i++;
        
        i=2 -> i < 5 => T
            hello
        
        .
        .
        .
        .
        .
        
        i = 4 -> i<5 ; T
        i++;
        
        i = 5 -> 5<5 ; F
        
        
         */
//        int a[] = {1,3,5,2,4,6};
        // index -> [0,1,2,3,4,5]
        // value -> [1,3,5,2,4,6]
//        System.out.println(a[0]+a[1]+a[2]+a[3]+a[4]+a[5]);
//        int sum = 0; // 4
//       
//        for (int i = 0; i <= 5; i++) { // 1
//            sum = sum + a[i];
//            System.out.print(sum + " ");
//        }
//        System.out.println();
//        System.out.println(sum);
//        int a[] = {1, 3, 5, 2, 4, 6};
//        int oddSum = 0;
//        int evenSum = 0;
//
//        for (int i = 0; i <= 5; i++) {
//            if (a[i] % 2 == 0) {
//                evenSum = evenSum + a[i];
//            } else {
//                oddSum = oddSum + a[i];
//            }
//        }
//
//        System.out.println(oddSum);
//        System.out.println(evenSum);
//        int a[] = {1, 3, 5, 2, 4, 6};
//
//        int evenIndex = 0;
//
//        for (int i = 0; i <= 5; i += 2) {
//            evenIndex = evenIndex + a[i];
//        }
//
//        System.out.println(evenIndex);



//          2^2 = 4 => 2^8 = 2*2*2*2 = 16 =>  2^8 = 256

//        int ans = 1;
//        int sq = 8;
        
//        for(int i=0;i<sq;i++){
//            ans = ans*2;
//        }

//        while(sq>0){
//            ans *= 2;
//            sq--;
//        }
//
//        System.out.println(" 2^"+sq+" = "+ans); // 256
    }
}

// Question =  Check in array even number is exits or not int a = [1,3,5,7,9,11] => False, a = [1,2,5,6,7,9]=> True, 2
