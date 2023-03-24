# Fundamentals

Printing?

    System.out.println("Hello World");

### **_1. Variables_**

Used to store data

    // If Joel's age is 80

    joelAge = 80;

Note -- Word oda first letter paaru... there are two words.. Joel and Age... first word first letter needs to be in small letter and second word first letter needs to be in caps.. dont use \_(underscore).. its not wrong its just professionalism in java... this is called camel casing

### **_2. Data types_**

Type of data we store

    // Name is a string
    String name = "Joel";
    // Age is number
    int age = 10;
    // marks can be decimal
    float mark = 50.5;
    // Phone number is integer but its too long
    long phoneNumber = 6383976752;

    etc.,

### **_3. Operators_**

Arthimetic operator

    int result = 10 + 5;

    // + is the operator here

Logical Operator

    boolean isTrue = true && false;

    // && is operator here

Comparison Operator

    boolean isEqual = num1 == num2;

    // == is operator here

Assignment Operator

    number += 0;

### **_4. Control Statements_**

- If else

If I score above 40, I passed the exam.

    if(score>=40){
        System.out.println("I passed the exam");
    }

Or else if I score above 80, I passed with distinction

    else if(score>=80){
        System.out.println("I passed with Distinction");
    }

Else I failed the exam

    else{
        System.out.println("I failed");
    }

- Switch

Tell me what day based on the day number

    int day = 3;
    switch(day) {
        case 1:
            System.out.println("Monday");
            break;
        case 2:
            System.out.println("Tuesday");
            break;
        default:
            System.out.println("Invalid day");
            break;
    }

### **_5. Looping Statements_**

- For loop

Printing number from 1 to 10

    for(int i = 1; i <= 10; i++) {
        System.out.println(i);
    }

- While Loop

Printing number from 1 to 10

    int j = 1;
    while(j <= 10) {
        System.out.println(j);
        j++;
    }

### **_6. Methods_**

Printing Hellow world

    public static void printMessage() {
        System.out.println("Halloww world!");
    }

    printMessage(); // calling the method

### **_7. OOPS_**

\*! What are objects?

Objects are the things that can contain data and methods that operate on the data. (Also instance of a class)

    Person person1 = new Person();
    person1.name = "John";
    person1.age = 30;
    person1.speak();

\*! What is OOPS?

Object oriented Programming which is nothing but programming based on the concept of object.

\*! What are classes?

Blueprint for creating objects.

    public class Person {
        String name;
        int age;

        public void speak() {
            System.out.println("My name is " + name + " and I am " + age + " years old.");
        }
    }

### **_8. Access Modifiers_**

There are 4 access modifiers

- public : Can be accessed from anywhere
- private : Only accessible within the class
- protected : Accessible within the package
- default : will be protected

  public class MyClass {
  public int myPublicVar;
  private int myPrivateVar;
  protected int myProtectedVar;

        public void myPublicMethod() {
            // code
        }

        private void myPrivateMethod() {
            // code
        }

        protected void myProtectedMethod() {
            // code
        }

  }

### **_9. Abstract Class_**

Cannot be instantiated. Used for keeping it as a template

    public abstract class Shape {
        protected int x;
        protected int y;

        public void moveTo(int newX, int newY) {
            x = newX;
            y = newY;
        }

        public abstract double getArea();
    }

### **_10. Implementation_**

- Interface

  An interface is like a blueprint or a set of instructions for implementing certain functionality.

Those are defined in the interface needs to be implemented ryt.. that are done using the implementation method

    public interface MyInterface {
        void myMethod();
    }

    public class MyClass implements MyInterface {
        public void myMethod() {
            System.out.println("Implementation of myMethod");
        }
    }

### **_11. Inheritance_**

Parent child relationship

    public class Animal {
        public void eat() {
            System.out.println("The animal is eating");
        }
    }

    public class Dog extends Animal {
        public void bark() {
            System.out.println("The dog is barking");
        }
    }

if I call dog's eat it will be available

    Dog jimmy = new Dog();
    jimmy.eat(); // Outputs : The animal is eating
    jimmy.bark(); // Outputs : The dog is barking

-- Super keyword is used to refer the parent of the class

### **_12. Constructor_**

Constructor is like a method (not a method okayy) with the same name of the class without a return data type

It will run whenever the object is created.
public class MyClass {
private int myVar;

        public MyClass(int var) {
            System.out.println("Constructor inside");
            myVar = var;
        }
    }

So if I create an object of this class then constructor would run

    MyClass con = new MyClass("Joe"); // Outputs : Constructor inside

### **_13. Encapsulation_**

Using getters and setters are called encapsulation

When a private variable needs to be accessible in other classes we use getter and setters

    public class MyClass {
        private int age;

        public int getAge() {
            return age;
        }

        public void setAge(int ageValue) {
            age = ageValue;
        }
    }

### **_14. Exception Handling_**

Exception handling is the process of handling not only the java errors also the business errors.

- Throws

  This method can throw an exception of this type

        public static int divide(int a, int b) throws ArithmeticException {

- Throw

  Throw an exception of this type

        throw new ArithmeticException("Cannot divide by zero");

Combined:

      public static int divide(int a, int b) throws ArithmeticException {
        if (b == 0) {
        throw new ArithmeticException("Cannot divide by zero");
        }
        return a / b;
    }

- Try, Catch, Finally

  Try says try this code until when it gets to an error

  Catch says when the error happens in try block check if its the same exception and do the necessary things

  Finally doesnt care whether error happened or successfully executed the try block. When the process is finished it will execute.

        public static void main(String[] args) {
            try {
            int result = divide(10, 0);
            System.out.println("Result: " + result);
            } catch (ArithmeticException e) {
            System.out.println("Exception: " + e.getMessage());
            } finally {
            System.out.println("Finally block executed");
            }
        }

### **_15. Static,Final,Enumeration_**

- Static

Static values are class based and not object based

All students were in IT - B section... but each had a unique name

    static char section = 'B'; // Same for all the objects
    String name; // Will be different for each object

-- We can change the static variables value in any object and it would be reflected on all the objects..

- final

Final values cannot be changed

    final int age = 10;
    age +=1 // Will produce an error

We can also use final and static together to get a variable that cannot be changed and is same for all objects

    static final String department = "IT";

- Enumeration

Enum is used for to define a fixed set of constants that can be used throughout the code

    enum Size {
    SMALL,
    MEDIUM,
    LARGE
    }

    public class EnumExample {
    public static void main(String[] args) {
        Size cupSize = Size.MEDIUM;

        switch (cupSize) {
        case SMALL:
            System.out.println("Small cup size");
            break;
        case MEDIUM:
            System.out.println("Medium cup size");
            break;
        case LARGE:
            System.out.println("Large cup size");
            break;
        }
    }
    }

### **_16. Polymorphism_**

Taking Multiple Forms

Two types

- Overriding

        class Animal {
            public void makeSound() {
            System.out.println("Animal is making a sound");
            }
        }

        class Cat extends Animal {
            @Override
            public void makeSound() {
                System.out.println("Meow");
            }
        }

        public class OverridingExample {

            public static void main(String[] args) {
                Animal animal = new Animal();
                animal.makeSound();

                Cat cat = new Cat();
                cat.makeSound();
            }
        }

In both classes there is makeSound method but if we use cat object it gives out cat's method by overriding the animal method

- Overloading

        public class OverloadingExample {

            public static int add(int a, int b) {
                return a + b;
            }

            public  static int add (int a, int b, int c){
                return a + b + c;
            }


            public static double add(double a, double b) {
                return a + b;
            }

            public static void main(String[] args) {
                int sum1 = add(2, 3);
                System.out.println("Sum1: " + sum1);

                int sum2 = add(2,3,4);
                System.out.println("Sum2: " + sum2);

                double sum3 = add(2.5, 3.5);
                System.out.println("Sum3: " + sum3);
            }
        }

### **_17. Lambda Functions_**

Lambda is used to define a function without explicitly creating a method or class for that

    interface MyFunction {
        int apply(int x, int y);
    }

    public class LambdaExample {
        public static void main(String[] args) {
            MyFunction add = (x, y) -> x + y;
            MyFunction subtract = (x, y) -> x - y;

            System.out.println(add.apply(2, 3));
            System.out.println(subtract.apply(2, 3));
        }
    }

Here the apply is used to send the parameters to the x and y values and -> defines the function inside
