'use client';

import GoToTopButton from '@/components/button';
import CodeBlock from '@/components/CodeBlock';
import ExpandableSection from '@/components/ExpandableSection';
import CommentSection from '@/components/CommentSection';
import CodeEditor from '@/components/CodeEditor';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import '@/app/globals.css';

export default function CppPage() {
    const { user, signOut } = useAuth();
    const router = useRouter();

    const handleCommentClick = () => {
        if (!user) {
            alert('Please log in to comment.'); // Show a login prompt
            router.push('/login'); // Redirect to the login page
        }
    };
  return (
    
    <div className="text-black font-mono">
        {user ? (
                    <>
                        <p>Welcome, {user.email}!</p>
                        <button
                            onClick={signOut}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <p>Welcome, guest! Please log in to comment.</p>
                )}
     <div className="container mx-auto p-4">
        <ExpandableSection title="C++ Code Editor (You can edit your code here....)">
            <CodeEditor /></ExpandableSection>
        </div>
    
        {/* <CodeBlock
        language="cpp"
        code={`#include <iostream>
        using namespace std;

        int main() {
            cout << "Hello World!";
            return 0;
        }`}
        /> */}
        
        
        <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">C++ Tutorial Series</h1>
      {/* <p className="">Welcome to the C++ tutorial section. Here you will learn the basics of C++ programming.</p> */}
      <br></br>

      {/* Introduction */}
    <ExpandableSection title="Introduction to Programming and C++">
      
        {/* <h1 className="text-2xl  font-bold mb-4">Module 1:</h1> */}
        <hr className="my-4 border-t border-gray-500" />
        <div className="text-lg"> Since we are new to programming, it’s important to start with the basics and gradually build up their understanding. Here’s a structured approach to teaching C++:</div>
        <hr className="my-4 border-t border-gray-500" />
        <h1 className="text-2xl  font-bold mb-4">1.What is Programming?</h1>
        <ul className="ml-10 list-disc">
        <li className=" text-lg  mb-4"><b>Definition:</b> Programming is the process of giving instructions to a computer to perform specific tasks.</li>
        
        <li className="text-lg mb-4"><b>Why Learn Programming?</b>
            <ul className="ml-6 list-disc">
            <li className="hollow-disc ">Essential for solving engineering problems (e.g., simulations, data analysis, automation).</li>
            <li className="hollow-disc ">C++ is widely used in software development, game development, and embedded systems.</li>
            </ul>
        </li></ul>

        <hr className="my-4 border-t border-gray-500" />

        <h1 className="text-2xl  mb-4"><b>2. Setting Up the Environment</b></h1>
        <ul className="ml-6 list-disc">
        <li className=" text-lg  mb-4"><b>Step 1: Install a C++ Compiler</b>
        <ul className="ml-10 list-disc">
            <li className=" mb-2"><b>Windows:</b> Install MinGW or use an IDE like Code::Blocks or Dev-C++.</li>
            <li className=" "><b>Mac/Linux:</b> GCC or Clang is usually pre-installed. If not, install it using the terminal:
                <ul className="ml-6 list-disc mb-4">
                <li className="  hollow-disc">Mac: brew install gcc</li>
                <li className=" hollow-disc">Linux: sudo apt install g++</li>
                </ul>
            </li>
            </ul>
        </li>
        
        <li className="text-lg  mb-4"><b>Step 2: Choose an IDE or Text Editor</b>
            <ul className="ml-10 list-disc">
            <li className=" mb-2">
                <b>IDE:</b> Code::Blocks, Visual Studio, or Dev-C++ (recommended for beginners).
                </li>

            <li className=" "><b>Text Editor:</b> VS Code, Sublime Text, or Notepad++ with a C++ compiler.</li>
            </ul>
        </li></ul>

        <hr className="my-4 border-t border-gray-500" />

        <h1 className="text-2xl  mb-4"><b>3. Writing Your First C++ Program</b></h1>
        <div className="text-lg">
            <ul className="ml-10 list-disc">
            <li className=" mb-2">
                <b>Program Objective:</b> Display &quot;Hello, World!&quot; on the screen.
                </li>

            <li className=" "><b>Code:</b> </li>
            <CodeBlock
        language="cpp"
        code={`#include <iostream> // Header file for input/output operations
using namespace std; // Avoids writing std:: before cout and endl

int main() { // Main function where execution begins
cout << "Hello, World!" << endl; // Print "Hello, World!" to the console
return 0; // Indicates successful program termination
}`}
        />
            </ul>
        </div>
        <hr className="my-4 border-t border-gray-500" />

        <h1 className="text-2xl  mb-4"><b>4. Breaking Down the Code</b></h1>
        <div className="text-lg">
            <ul className="ml-10 list-disc "><b>1. #include</b> &lt;iostream&gt;
            <ul>
                <li className=" mb-2">This line includes the <b>input-output stream library</b>, which allows us to use cout and cin.</li>
            </ul></ul>
            <ul className="ml-10 list-disc "><b>2. using namespace std;</b>
            <ul>
                <li className=" mb-2">This line tells the compiler to use the <b>standard namespace</b>, so we don’t have to write std::cout or std::endl.</li>
            </ul></ul>
            <ul className="ml-10 list-disc "><b>3. int main() {}</b>
            <ul>
            <li className=" mb-2">Every C++ program must have a main() function. Execution starts here.</li>
            </ul></ul>
            <ul className="ml-10 list-disc "><b>4. cout</b>  &quot;Hello, World!&quot; &lt;&lt; <b>endl</b>;

            <ul className="ml-10 list-disc">
                <div className=" mb-2">
                    <li><b>cout</b> is used to print text to the console.</li>
                    <li><b>&lt;&lt; </b>  is the insertion operator.</li>
                    <li><b>endl</b>  inserts a newline character.</li>
                </div></ul></ul>
            <ul className="ml-10 list-disc "><b>5. return 0;</b>
            <ul className="ml-10 list-disc">
            <li className=" mb-2">Indicates that the program executed successfully.</li>
            </ul></ul>
        </div>
        <hr className="my-4 border-t border-gray-500" />
        
        <h1 className="text-2xl  mb-4"><b>5. Compiling and Running the Program</b></h1>
        <div className="text-lg">
        <ul className="ml-10 list-disc">
        <li className="mb-4"><b>Step 1:</b>Save the file with a .cpp extension (e.g., hello.cpp).</li>
        <li className="mb-4"><b>Step 2:</b> Compile the program using a compiler:
        <ul className="ml-8 list-disc">
            <li className="mb-4 hollow-disc"><b>Command Line</b> </li>
            <CodeBlock
        language="python"
        code={`g++ hello.cpp -o hello`}
        />
            <li className=" mb-4 hollow-disc"><b>IDE:</b> Click the &quot;Build&quot; or &quot;Run&quot; button.</li>
            </ul>
        </li>
        <li className="mb-4"><b>Step 3:</b> Run the program:
        <ul className="ml-8 list-disc">
            <li className=" mb-4 hollow-disc"><b>Command Line</b> </li>
            <CodeBlock
        language="python"
        code={`./hello`}
        />
            <li className=" mb-4 hollow-disc"><b>IDE:</b> Click the &quot;Run&quot; button.</li>
            </ul>
        </li>
        <li className="  mb-4"><b>Output:</b>
        <ul className=" mb-4 ml-8 list-disc">
            <CodeBlock
        language="python"
        code={`Hello, World!`}
        />
            <li className=" mb-2 hollow-disc"><b>IDE:</b> Click the &quot;Run&quot; button.</li>
            </ul>
        </li></ul>
        </div>


        <hr className="my-4 border-t border-gray-500" />
      
        
        <h1 className="text-2xl  mb-4"><b>6. Practice Exercise</b></h1>
        <div className="text-lg">    
            <ul className="ml-10 list-disc">
            <li className=" mb-2">
            Modify the program to print your name instead of  &quot;Hello, World!&quot; .
                </li>

            <li className=" "><b>Example:</b> </li>
            <CodeBlock
        language="cpp"
        code={`#include <iostream>
 using namespace std;

 int main() {
 cout << "My name is [Your Name]!" << endl;
 return 0;
}`}
        />
            </ul>

        </div>
        <hr className="my-4 border-t border-gray-500" />

        <h1 className="text-2xl  mb-4"><b>7. Key Takeaways for Day 1</b></h1>
        <div className="text-lg">
            <ul className="ml-10 list-disc">
            <div className=" mb-2">
                <li>Programming is about giving instructions to a computer.</li>
                <li>C++ programs start execution from the<b>main()</b>  function.</li>
                <li><b>cout</b> is used to display output on the screen.</li>
                <li>Always end statements with a semicolon <b>(;)</b>.</li>
            </div>
            
        </ul>
        </div>
        <hr className="my-4 border-t border-gray-500" />   
        
        <h1 className="text-2xl  mb-4"><b>Homework</b></h1>
        <div className="text-lg">
        <ul className="ml-8 list-disc">
        <ul className=" mb-2">
            1. Write a program to print your name, age, and favorite subject.
                </ul>
        <ul className="ml-10 list-disc">
            <li className=" "><b>Example Output:</b> </li>
            <CodeBlock
        language="cpp"
        code={`
  Name: Alice 
  Age: 20
  Favorite Subject: Math`}
        /></ul>
        <ul className=" mb-2">
            2. Experiment with cout to print multiple lines of text.
                </ul>
            </ul>
        </div>

        <hr className="my-4 border-t border-gray-500" /> 
    </ExpandableSection>
    
    {/* Variables */}
    <ExpandableSection title="Variables, data types, and basic input/output.">
    <hr className="my-4 border-t border-gray-500" />
    <div className="text-lg">
    We’ll focus on variables, data types, and basic input/output in C++. These are the building blocks of any program, and understanding them is crucial for writing meaningful code.
    </div>
    <hr className="my-4 border-t border-gray-500" />
        <h1 className="text-2xl  font-bold mb-4">1. Variables</h1>
        <ul className="ml-12 list-disc">
            <li className="text-lg  mb-4"><b>What is a Variable?</b>
                <ul className="ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">A variable is a named storage location in memory that holds a value.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">It allows you to store and manipulate data in your program.</li>
                </ul>
        </li></ul>
        <ul className="ml-12 mr-12 list-disc">
            <li className="text-lg  mb-4"><b>Rules for Naming Variables:</b>
                <ul className="ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">Variable names can contain letters, numbers, and underscores (_).</li>
                <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full ">They cannot start with a number.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">They cannot be a C++ keyword (e.g., int, return).</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">Example: age, total_score, student_name.</li>
                </ul>
        </li></ul>

        <hr className="my-4 border-t border-gray-500" />

        <h1 className="text-2xl  font-bold mb-4">2. Data Types</h1>
        <ul className="ml-12 mr-12 list-disc">
            <li className="text-lg  mb-4"><b>What is a Data Type?</b>
                <ul className="ml-12 list-none">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full"> A data type defines the type of data a variable can hold.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">C++ has several built-in data types:</li>
                <ul className="ml-14 list-decimal">
                    <li className="text-lg  mb-4"><b> int:</b> Integer numbers (e.g., 10, -5).</li>
                    <li className="text-lg  mb-4"><b> float: </b>Single-precision floating-point numbers (e.g., 3.14, -0.001).</li>
                    <li className="text-lg  mb-4"><b>double:</b> Double-precision floating-point numbers (e.g., 3.14159, -0.0001).</li>
                    <li className="text-lg  mb-4"><b>char:</b> Single characters (e.g., &apos;A&apos;, &apos;z&apos;, &apos;$&apos;).</li>
                    <li className="text-lg  mb-4"><b>bool: </b>Boolean values (true or false).</li>
                </ul>
                </ul>
            </li>
            <li className="text-lg  mb-4"><b>Example:</b></li>
                <CodeBlock language="cpp"
                    code={`
        int age = 20;
        float height = 5.9;
        double pi = 3.14159;
        char grade = 'A';
        bool isStudent = true;`}
                />
        </ul>

        <hr className="my-4 border-t border-gray-500" />

        <h1 className="text-2xl  font-bold mb-4">3. Basic Input/Output</h1>
        <ul className="ml-12 mr-12 list-disc">
            <li className="text-lg  mb-4"><b>Output with cout:</b>
                <ul className="ml-12 list-none">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">Use cout (console output) to display data on the screen.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">Example:</li>
                <CodeBlock language="cpp"
                    code={`cout << "Hello, World!" << endl;`}
                />
                </ul>
            </li>
            <li className="text-lg  mb-4"><b>Input with cin:</b>
                <ul className="ml-12 list-none">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">Use cin (console input) to take input from the user.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">Example:</li>
                <CodeBlock language="cpp"
                    code={`int num;
cout << "Enter a number: ";
cin >> num;
cout << "You entered: " << num << endl;`}
                />
                </ul>
            </li>
        </ul>

        <hr className="my-4 border-t border-gray-500" />

        <h1 className="text-2xl  font-bold mb-4">4. Writing a Simple Program</h1>
        <br></br>
        <div className="ml-12 mr-12">
        <ul className="text-lg">Let’s write a program that takes input from the user and displays it.</ul>
        <CodeBlock language="cpp"
                    code={`#include <iostream>
using namespace std;

int main() {
    // Declare variables
    string name;
    int age;

    // Take input from the user
    cout << "Enter your name: ";
    cin >> name;
    cout << "Enter your age: ";
    cin >> age;

    // Display the output
    cout << "Hello, " << name << "!" << endl;
    cout << "You are " << age << " years old." << endl;

    return 0;
}`}
                /></div>
        <hr className="my-4 border-t border-gray-500" />

        <h1 className="text-2xl  font-bold mb-4">5. Practice Exercises</h1>
        <br></br>
        <ul className="ml-12 mr-12 list-disc">
            <li className="text-lg  mb-4"><b>Exercise 1:</b> Write a program to calculate the sum of two numbers entered by the user.
                
                <CodeBlock language="cpp"
                    code={`#include <iostream>
using namespace std;

int main() {
    int num1, num2;
    cout << "Enter two numbers: ";
    cin >> num1 >> num2;
    int sum = num1 + num2;
    cout << "Sum: " << sum << endl;
    return 0;
}`}
                />
                
            </li>
        </ul>
        <ul className="ml-12 mr-12 list-disc">
            <li className="text-lg  mb-4"><b>Exercise 2:</b> Write a program to calculate the area of a rectangle.
                
                <CodeBlock language="cpp"
                    code={`#include <iostream>
using namespace std;

int main() {
    float length, width;
    cout << "Enter length and width of the rectangle: ";
    cin >> length >> width;
    float area = length * width;
    cout << "Area: " << area << endl;
    return 0;
}`}
                />
                
            </li>
        </ul>
        <ul className="ml-12 mr-12 list-disc">
            <li className="text-lg  mb-4"><b>Exercise 3:</b> Write a program to convert temperature from Celsius to Fahrenheit.
                
                <CodeBlock language="cpp"
                    code={`#include <iostream>
using namespace std;

int main() {
    float celsius;
    cout << "Enter temperature in Celsius: ";
    cin >> celsius;
    float fahrenheit = (celsius * 9 / 5) + 32;
    cout << "Temperature in Fahrenheit: " << fahrenheit << endl;
    return 0;
}`}
                />
                
            </li>
        </ul>

        <hr className="my-4 border-t border-gray-500" />  

        <h1 className="text-2xl  mb-4"><b>6. Key Takeaways</b></h1>
            <ul className="ml-12 mr-12 list-disc">
            <div className=" mb-2 text-lg">
                <li>Variables are used to store data in a program.</li>
                <li>Data types define the type of data a variable can hold.</li>
                <li>Use <b>cin</b> to take input from the user and <b>cout</b> to display output.</li>
                <li>Always declare variables before using them.</li>
            </div>
            </ul>
            <hr className="my-4 border-t border-gray-500" />   

            <h1 className="text-2xl  mb-4"><b>Homework</b></h1>
            <ul className="ml-12 mr-12 list-decimal">
            <div className=" mb-2 text-lg" >
                <li>Write a program to calculate the area of a circle. (Hint: Use pi = 3.14159.)</li>
                <li>Write a program to swap two numbers entered by the user. (Hint: Use a temporary variable.)</li>
                <li>Experiment with different data types and see what happens if you store incorrect data (e.g., storing a floating-point number in an int variable).</li>

            </div>
            </ul>
            <hr className="my-4 border-t border-gray-500" /> 
    </ExpandableSection>

    {/* Operators and Expressions */}
    <ExpandableSection title="Operators and Expressions.">
    <hr className="my-4 border-t border-gray-500" />
        <div className="text-lg">    
            We’ll focus on operators and expressions in C++. Operators are symbols that perform operations on variables and values, and expressions combine variables, constants, and operators to produce a result.
        </div>
        <hr className="my-4 border-t border-gray-500" />
        <h1 className="text-2xl  mb-4"><b>1. Types of Operators</b></h1>
        <div className="text-lg">C++ has several types of operators. We’ll focus on the most commonly used ones:</div>
            <ul className="ml-16 mr-12 list-decimal">
            <div className=" mb-2 text-lg">
                <li><b>Arithmetic Operators:</b> Perform mathematical operations.</li>
                <li><b>Relational Operators:</b> Compare two values.</li>
                <li><b>Logical Operators:</b> Combine multiple conditions.</li>
                <li><b>Assignment Operators:</b> Assign values to variables.</li>
            </div>
            </ul>
            <hr className="my-4 border-t border-gray-500" />

            <h1 className="text-2xl  font-bold mb-4">2. Arithmetic Operators</h1>
        <ul className="ml-12 list-disc">
            <li className="text-lg  mb-4"><b>Used for basic mathematical calculations.</b></li>
            <li className="text-lg  mb-4"><b>Operators:</b>
                <ul className="ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">+ (Addition)</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">- (Subtraction)</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">* (Multiplication)</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">/ (Division)</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">% (Modulus – remainder after division)</li>
                </ul>
            <li className="text-lg  mb-4"><b>Example</b>
            <CodeBlock
        language="cpp"
        code={`int a = 10, b = 3;
cout << "a + b = " << (a + b) << endl; // 13
cout << "a - b = " << (a - b) << endl; // 7
cout << "a * b = " << (a * b) << endl; // 30
cout << "a / b = " << (a / b) << endl; // 3 (integer division)
cout << "a % b = " << (a % b) << endl; // 1 (remainder)`}
        /> 
            </li>
        </li></ul>

        

        <hr className="my-4 border-t border-gray-500" />

        <h1 className="text-2xl  font-bold mb-4">3. Relational Operators</h1>
        <ul className="ml-12 list-disc">
            <li className="text-lg  mb-4"><b>Used to compare two values.</b></li>
            <li className="text-lg  mb-4"><b>Operators:</b>
                <ul className="ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">== (Equal to)</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">!= (Not equal to)</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">&gt; (Greater than)</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">&lt; (Less than)</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">&gt;= (Greater than or equal to)</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">&lt;= (Less than or equal to)</li>
                </ul>
            <li className="text-lg  mb-4"><b>Example</b>
            <CodeBlock
        language="cpp"
        code={`int x = 5, y = 10;
cout << (x == y) << endl; // 0 (false)
cout << (x != y) << endl; // 1 (true)
cout << (x > y) << endl;  // 0 (false)
cout << (x < y) << endl;  // 1 (true)
cout << (x >= y) << endl; // 0 (false)
cout << (x <= y) << endl; // 1 (true)`}
        /> 
            </li>
        </li></ul>
        <hr className="my-4 border-t border-gray-500" />

                <h1 className="text-2xl  font-bold mb-4">4. Logical Operators</h1>
                <ul className="ml-12 list-disc">
                    <li className="text-lg  mb-4"><b>Used to combine multiple conditions.</b></li>
                    <li className="text-lg  mb-4"><b>Operators:</b>
                        <ul className="ml-12 list-non">
                        <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">&& (Logical AND) – True if both conditions are true.</li>
                        <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">|| (Logical OR) – True if at least one condition is true.</li>
                        <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">! (Logical NOT) – Reverses the condition.</li>
                        </ul>
                    <li className="text-lg  mb-4"><b>Example</b>
                    <CodeBlock
                language="cpp"
                code={`int x = 5, y = 10;
cout << (x == y) << endl; // 0 (false)
cout << (x != y) << endl; // 1 (true)
cout << (x > y) << endl;  // 0 (false)
cout << (x < y) << endl;  // 1 (true)
cout << (x >= y) << endl; // 0 (false)
cout << (x <= y) << endl; // 1 (true)`}
                /> 
                    </li>
                </li></ul>
        <hr className="my-4 border-t border-gray-500" />

                <h1 className="text-2xl  font-bold mb-4">5. Assignment Operators</h1>
                <ul className="ml-12 list-disc">
                    <li className="text-lg  mb-4"><b>Used to assign values to variables.</b></li>
                    <li className="text-lg  mb-4"><b>Operators:</b>
                        <ul className="ml-12 list-non">
                        <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">= (Assign)</li>
                        <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">+= (Add and assign)</li>
                        <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">-= (Subtract and assign)</li>
                        <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">*= (Multiply and assign)</li>
                        <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">/= (Divide and assign)</li>
                        <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">%= (Modulus and assign)</li>
                        
                        </ul>
                    <li className="text-lg  mb-4"><b>Example</b>
    <CodeBlock
language="cpp"
code={`int a = 5;
a += 3; // a = a + 3 (a becomes 8)
a -= 2; // a = a - 2 (a becomes 6)
a *= 4; // a = a * 4 (a becomes 24)
a /= 3; // a = a / 3 (a becomes 8)
a %= 5; // a = a % 5 (a becomes 3)`}
/> 
    </li>
</li></ul>
            <hr className="my-4 border-t border-gray-500" />

            <h1 className="text-2xl  font-bold mb-4">6. Writing a Program Using Operators</h1>
            <div className="text-lg">Let’s write a program to calculate the area and perimeter of a rectangle.</div>
            <CodeBlock
language="cpp"
code={`#include <iostream>
using namespace std;

int main() {
    float length, width;
    cout << "Enter length and width of the rectangle: ";
    cin >> length >> width;

    float area = length * width;
    float perimeter = 2 * (length + width);

    cout << "Area: " << area << endl;
    cout << "Perimeter: " << perimeter << endl;

    return 0;
}`}
/>

        <hr className="my-4 border-t border-gray-500" />

        <h1 className="text-2xl  font-bold mb-4">7. Practice Exercises</h1>
        <ul className="ml-16 mr-12 list-decimal">
            <div className=" mb-2 text-lg">
                <li><b>Exercise 1:</b> Write a program to check if a number is even or odd.
                <CodeBlock
language="cpp"
code={`#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;

    if (num % 2 == 0) {
        cout << num << " is even." << endl;
    } else {
        cout << num << " is odd." << endl;
    }

    return 0;
}`}
/>
                </li>
                <li><b>Exercise 2:</b> Write a program to find the largest of three numbers.
                <CodeBlock
language="cpp"
code={`#include <iostream>
using namespace std;

int main() {
    int a, b, c;
    cout << "Enter three numbers: ";
    cin >> a >> b >> c;

    int largest = a;
    if (b > largest) largest = b;
    if (c > largest) largest = c;

    cout << "Largest number: " << largest << endl;
    return 0;
}`}
/>
                </li>
                <li><b>Exercise 3:</b> Write a program to calculate the sum of digits of a number.
                <CodeBlock
language="cpp"
code={`#include <iostream>
using namespace std;

int main() {
    int num, sum = 0;
    cout << "Enter a number: ";
    cin >> num;

    while (num > 0) {
        sum += num % 10;
        num /= 10;
    }

    cout << "Sum of digits: " << sum << endl;
    return 0;
}`}
/>
                </li>
            </div>
            </ul>

            <hr className="my-4 border-t border-gray-500" />

            <h1 className="text-2xl  font-bold mb-4">8. Key Takeaways</h1>
            <ul className="ml-12 list-disc">
            <li className="text-lg  mb-4">Operators are used to perform operations on variables and values.</li>
            <li className="text-lg  mb-4">Arithmetic operators perform mathematical calculations.</li>
            <li className="text-lg  mb-4">Relational operators compare two values.</li>
            <li className="text-lg  mb-4">Logical operators combine multiple conditions.</li>
            <li className="text-lg  mb-4">Assignment operators assign values to variables.</li>
            </ul>

            <hr className="my-4 border-t border-gray-500" />

            <h1 className="text-2xl  font-bold mb-4">Homeworks</h1>
            <ul className="ml-16 list-decimal">
            <li className="text-lg  mb-4">Write a program to calculate the factorial of a number.</li>
            <li className="text-lg  mb-4">Write a program to check if a number is positive, negative, or zero.</li>
            <li className="text-lg  mb-4">Experiment with different operators and see how they work.</li>
            </ul>

            <hr className="my-4 border-t border-gray-500" />

    </ExpandableSection>

    <ExpandableSection title="Conditional Statements.">
    <hr className="my-4 border-t border-gray-500" />
    <div className="text-lg">    
    We’ll focus on conditional statements in C++. Conditional statements allow your program to make decisions based on certain conditions. This is a fundamental concept in programming, as it enables your code to behave differently depending on the input or situation.        </div>
    <hr className="my-4 border-t border-gray-500" />
    <h1 className="text-2xl  mb-4"><b>1. What are Conditional Statements?</b></h1>
    <ul className="text-lg list-disc">
        <li className="ml-12">Conditional statements allow you to execute different blocks of code based on whether a condition is true or false.</li>
        <li className="ml-12">They are essential for controlling the flow of your program.</li>
    </ul>
    <hr className="my-4 border-t border-gray-500" />
    <h1 className="text-2xl  mb-4"><b>2.Types of Conditional Statements</b></h1>
    <ul className="text-lg list-decimal">
        <li className="ml-12">if Statement: Executes a block of code if a condition is true.</li>
        <li className="ml-12">if-else Statement: Executes one block of code if a condition is true, and another block if it’s false.</li>
        <li className="ml-12">else-if Ladder: Checks multiple conditions in sequence.</li>
        <li className="ml-12">switch Statement: Executes one of many blocks of code based on the value of a variable.</li>
    </ul>
    <hr className="my-4 border-t border-gray-500" />
    <h1 className="text-2xl  mb-4"><b>3. if Statement</b></h1>
    <ul className="text-lg list-disc">
        <li className="ml-12">Syntax:
        <CodeBlock
        language="cpp"
        code={`if (condition) {
    // Code to execute if the condition is true
}`}
        />
        </li>
        <li className="ml-12">Example:
        <CodeBlock
        language="cpp"
        code={`int age = 20;
if (age >= 18) {
    cout << "You are an adult." << endl;
}`}
        />
        </li>
    </ul>
    <hr className="my-4 border-t border-gray-500" />
    <h1 className="text-2xl  mb-4"><b>4. if-else Statement</b></h1>
    <ul className="text-lg list-disc">
        <li className="ml-12">Syntax:
        <CodeBlock
        language="cpp"
        code={`if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}`}
        />
        </li>
        <li className="ml-12">Example:
        <CodeBlock
        language="cpp"
        code={`int age = 15;
if (age >= 18) {
    cout << "You are an adult." << endl;
} else {
    cout << "You are a minor." << endl;
}`}
        />
        </li>
    </ul>
    <hr className="my-4 border-t border-gray-500" />
    <h1 className="text-2xl  mb-4"><b>5. else-if Ladder</b></h1>
    <ul className="text-lg list-disc">
        <li className="ml-12">Syntax:
        <CodeBlock
        language="cpp"
        code={`if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition2 is true
} else {
    // Code to execute if all conditions are false
}`}
        />
        </li>
        <li className="ml-12">Example:
        <CodeBlock
        language="cpp"
        code={`int marks = 85;
if (marks >= 90) {
    cout << "Grade: A" << endl;
} else if (marks >= 80) {
    cout << "Grade: B" << endl;
} else if (marks >= 70) {
    cout << "Grade: C" << endl;
} else {
    cout << "Grade: D" << endl;
}`}
        />
        </li>
    </ul>

    <hr className="my-4 border-t border-gray-500" />
    <h1 className="text-2xl  mb-4"><b>6. switch Statement</b></h1>
    <ul className="text-lg list-disc">
        <li className="ml-12">Used when you have multiple conditions based on the value of a single variable.</li>
        <li className="ml-12">Syntax:
        <CodeBlock
        language="cpp"
        code={`switch (variable) {
    case value1:
        // Code to execute if variable == value1
        break;
    case value2:
        // Code to execute if variable == value2
        break;
    default:
        // Code to execute if variable doesn't match any case
}`}
        />
        </li>
        <li className="ml-12">Example:
        <CodeBlock
        language="cpp"
        code={`char grade = 'B';
switch (grade) {
    case 'A':
        cout << "Excellent!" << endl;
        break;
    case 'B':
        cout << "Good job!" << endl;
        break;
    case 'C':
        cout << "You can do better." << endl;
        break;
    default:
        cout << "Invalid grade." << endl;
}`}
        />
        </li>
    </ul>
    <hr className="my-4 border-t border-gray-500" />
    <h1 className="text-2xl  mb-4"><b>7. Writing a Program Using Conditional Statements</b></h1>
    <div className="">Let’s write a program to check if a number is positive, negative, or zero.</div>
    <CodeBlock
        language="cpp"
        code={`#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;

    if (num > 0) {
        cout << "Positive number." << endl;
    } else if (num < 0) {
        cout << "Negative number." << endl;
    } else {
        cout << "Zero." << endl;
    }

    return 0;
}`}
        />
    <hr className="my-4 border-t border-gray-500" />
    <h1 className="text-2xl  mb-4"><b>8. Practice Exercises</b></h1>
    <ul className="text-lg list-decimal">
        <li className="ml-16">Exercise 1: Write a program to check if a year is a leap year.
            <ul className="list-disc">
                <li className="ml-12">A year is a leap year if: It is divisible by 4 but not by 100, or It is divisible by 400.</li>
            </ul>
            <CodeBlock
        language="cpp"
        code={`#include <iostream>
using namespace std;

int main() {
    int year;
    cout << "Enter a year: ";
    cin >> year;

    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        cout << year << " is a leap year." << endl;
    } else {
        cout << year << " is not a leap year." << endl;
    }

    return 0;
}`}
        />
        </li>
        <li className="ml-16">Exercise 2: Write a program to find the largest of three numbers using if-else.
        <CodeBlock
        language="cpp"
        code={`#include <iostream>
using namespace std;

int main() {
    int a, b, c;
    cout << "Enter three numbers: ";
    cin >> a >> b >> c;

    if (a >= b && a >= c) {
        cout << "Largest: " << a << endl;
    } else if (b >= a && b >= c) {
        cout << "Largest: " << b << endl;
    } else {
        cout << "Largest: " << c << endl;
    }

    return 0;
}`}
        />
        </li>
        <li className="ml-16">Exercise 3: Write a program to check if a character is a vowel or consonant using switch.
        <CodeBlock
        language="cpp"
        code={`#include <iostream>
using namespace std;

int main() {
    char ch;
    cout << "Enter a character: ";
    cin >> ch;

    switch (tolower(ch)) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            cout << ch << " is a vowel." << endl;
            break;
        default:
            cout << ch << " is a consonant." << endl;
    }

    return 0;
}`}
        />
        </li>
    </ul>
    <hr className="my-4 border-t border-gray-500" />
    <h1 className="text-2xl  mb-4"><b>9. Key Takeaways for Day 4</b></h1>
    <ul className="text-lg list-disc">
        <li className="ml-12">Conditional statements allow your program to make decisions.</li>
        <li className="ml-12">Use if, if-else, and else-if for complex decision-making.</li>
        <li className="ml-12">Use switch for multiple conditions based on a single variable.</li>
    </ul>
    <hr className="my-4 border-t border-gray-500" />
    <h1 className="text-2xl  mb-4"><b>Homework</b></h1>
    <ul className="text-lg list-disc">
        <li className="ml-12">Write a program to calculate the grade of a student based on their marks using if-else.</li>
        <li className="ml-12">Write a program to check if a number is divisible by both 5 and 11.</li>
        <li className="ml-12">Experiment with nested if-else statements.</li>
    </ul>
    </ExpandableSection>
    <GoToTopButton />
 
    <br></br>
     <div>

      <CommentSection user={user} onCommentClick={handleCommentClick} />
    </div>
</div>

  );
}