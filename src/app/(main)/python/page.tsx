// import GoToTopButton from '@/components/button';
import CodeBlock from '@/components/CodeBlock';
// import ExpandableSection from '@/components/ExpandableSection';
import CommentSection from '@/components/CommentSection';
import ExpandableSection from '@/components/ExpandableSection';
import CodeEditor from '@/components/CodeEditor';
import '@/app/globals.css';
import GoToTopButton from '@/components/button';

export default function PythonPage() {
    return (
      <div className="text-black font-mono">

        <div className="container mx-auto p-4 mb-4">
            <ExpandableSection title="Python Code Editor (You can edit your code here....)">
            <CodeEditor />
            </ExpandableSection>
        </div>
        
        <h1 className="text-2xl font-bold mb-4 flex justify-center items-center mb-4">&#x1F40D;Python Tutorial Series</h1>
        <p className="text-xl mb-4 ml-10" >Welcome to the Python tutorial section. Here you will learn the basics of Python programming.</p>
        <br></br>
        <ExpandableSection title='Introduction to Python and Basics'>
        <hr className="my-4 border-t border-gray-500" />
          <h1 className="text-2xl  mb-4"><b>1. Introduction to Python</b></h1>
          <ul className="text-lg ml-12 mr-12 list-disc">
            <li><b> Applications of Python:</b>
              <ul className="ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Python is a high-level, interpreted programming language.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                It is easy to learn and widely used in engineering, data science, web development, and more.</li>
              </ul>
            </li>
            <li><b> Why Python for Engineers?</b>
              <ul className="text-lg ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Python is versatile and has libraries for scientific computing, data analysis, and automation.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                It is used in fields like robotics, AI, IoT, and simulations.</li>
              </ul>
            </li>
            <li><b> What is Python?</b>
              <ul className="text-lg ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Data analysis (Pandas, NumPy).</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Visualization (Matplotlib, Seaborn).</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Machine learning (Scikit-learn, TensorFlow).</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Automation and scripting.</li>

              </ul>
            </li>
          </ul>

          <hr className="my-4 border-t border-gray-500" />

          
          {/* setting up environment */}
          
          <h1 className="text-2xl  mb-4"><b>2. Setting Up the Environment </b></h1>
          <ul className="text-lg ml-12 mr-12 list-disc">
            <li><b> Install Python:</b>
              <ul className="ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Download and install Python from python.org.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Ensure Python is added to the system PATH during installation.</li>
              </ul>
            </li>
            <li><b> Install an IDE/Text Editor:</b>
              <ul className="text-lg ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Recommend using VS Code, PyCharm, or Jupyter Notebook.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Install VS Code and the Python extension.</li>
              </ul>
            </li>
            <li><b>Verify Installation:</b>
              <ul className="text-lg ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Open a terminal or command prompt and type python --version to check the installed version.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Run a simple command like print<b>(&quot;Hello, World!&quot;)</b> in the Python interpreter.</li>
              </ul>
            </li>
          </ul>

          <hr className="my-4 border-t border-gray-500" />
          
          {/* First Program */}
          <h1 className="text-2xl  mb-4"><b>3. Writing Your First Python Program</b></h1>
          <ul className="text-lg ml-12 mr-12 list-disc">
            <li><b>Open the IDE or text editor and write a simple program.</b></li>
            <li><b> Explain the structure of a Python program:</b>
              <ul className="text-lg ml-12 mr-12 list-non">
                <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                No need for semicolons or curly braces.</li>
                <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Indentation is important for defining blocks of code.</li>
              </ul>
            </li>
          </ul><br></br>
          <h1 className="text-lg"><b>Example:</b></h1>
          <CodeBlock
        language="python"
        code={`# This is a comment
print("Hello, World!")  # This prints "Hello, World!" to the console`}
        />

        <hr className="my-4 border-t border-gray-500" />

        <h1 className="text-2xl mb-4" ><b>4. Basic Syntax and Concepts</b></h1><br></br>
        <div className="text-lg">Topics to Cover:
         <ul className="text-lg ml-16 mr-12 list-decimal">
          <br></br>
          <li>
            Variables and Data Types:
            <ul className="text-lg ml-12 mr-12 list-non">
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Variables store data.
              </li>
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Python supports integers, floats, strings, and booleans.
              </li>
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Example:</li>
              <CodeBlock
        language="python"
        code={`x = 10          # Integer
y = 3.14        # Float
name = "Alice"  # String
is_student = True  # Boolean`}
        />
              
            </ul>
          </li>
          <li>
          Input and Output:
            <ul className="text-lg ml-12 mr-12 list-non">
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Use input() to take user input.
              </li>
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Use print() to display output.
              </li>
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Example:</li>
              <CodeBlock
        language="python"
        code={`name = input("Enter your name: ")
print(f"Hello, {name}!")`}
        />
              
            </ul>
          </li>
          <li>
          Basic Operators:
            <ul className="text-lg ml-12 mr-12 list-non">
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Arithmetic operators: +, -, *, /, //, %, **.
              </li>
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Comparison operators: ==, !=, &gt;, &lt;, &gt;=, &lt;=.
              </li>
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Example:</li>
              <CodeBlock
        language="python"
        code={`a = 10
b = 3
print(a + b)  # Addition
print(a > b)  # Comparison`}
        />
              
            </ul>
          </li>


         </ul>
        </div>
      <hr className="my-4 border-t border-gray-500" />
        
      <h1 className="text-2xl mb-4" ><b>5. Hands-On Practice</b></h1><br></br>
      <div className="text-lg">
      <b>Give students simple exercises to practice what they’ve learned.</b><br></br>Exercises:
      <br></br>
          <ul className="ml-16 mr-12 list-decimal">
            <li>Write a program to add two numbers entered by the user.</li>
            <CodeBlock
        language="python"
        code={`num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
sum = num1 + num2
print(f"The sum is: {sum}")`}
        />
            <li>Write a program to calculate the area of a rectangle.</li>
            <CodeBlock
        language="python"
        code={`length = float(input("Enter the length: "))
width = float(input("Enter the width: "))
area = length * width
print(f"The area of the rectangle is: {area}")`}
        />
            <li>Write a program to swap two variables.</li>
            <CodeBlock
        language="python"
        code={`a = 5
b = 10
print(f"Before swapping: a = {a}, b = {b}")
a, b = b, a
print(f"After swapping: a = {a}, b = {b}")`}
        />        
          </ul>
      </div>
      <hr className="my-4 border-t border-gray-500" />
      
      <h1 className="text-2xl mb-4" ><b>6. Recap and Q&A</b></h1>
        <ul className="text-lg ml-12 mr-12 list-disc">
            <li><b> Recap what was covered:</b>
              <ul className="text-lg ml-12 mr-12 list-non">
                <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Introduction to Python.</li>
                <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Setting up the environment.</li>
                <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Writing and running a Python program.</li>
                <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Variables, data types, input/output, and operators.</li>
              </ul>
              
            </li>
        </ul>

      <hr className="my-4 border-t border-gray-500" />

      <h1 className="text-2xl mb-4"><b>Homework/Assignment</b></h1>
      <div className="text-lg"><b>Assign simple tasks to reinforce learning:</b></div>
      <ul className="text-lg ml-16 mr-12 list-decimal">
        <li>Write a program to calculate the area of a circle (area = πr²).</li>
        <li>Write a program to convert temperature from Celsius to Fahrenheit (F = (C * 9/5) + 32).</li>
        <li>Write a program to print your name, age, and address using input() and print().</li>
      </ul>
      <hr className="my-4 border-t border-gray-500" />
        </ExpandableSection>

        <ExpandableSection title='Control Structures and Functions '>
        <hr className="my-4 border-t border-gray-500" />
        <div className="text-xl">We’ll build on the basics and introduce control structures (if-else statements and loops) and functions. These are essential concepts for writing more complex and logical programs.</div>
        <hr className="my-4 border-t border-gray-500" />
        <h1 className="text-2xl  mb-4"><b>1. Recap</b></h1>
        <ul className="text-lg list-disc">
          <li className="ml-12">Brief review of whats covered:
            <li className="ml-12">Introduction to Python.</li>
            <li className="ml-12">Setting up the environment.</li>
            <li className="ml-12">Variables, data types, input/output, and operators.</li>
          </li>  
        </ul>
        <hr className="my-4 border-t border-gray-500" />
        <h1 className="text-2xl  mb-4"><b>2. Control Structures</b></h1>
        <div className="text-lg  mb-4">Control structures allow programs to make decisions and repeat tasks. We’ll cover if-else statements and loops (for and while).</div>
        
        <h1 className="text-xl ml-4 mb-4"><b>A. if-else Statements</b></h1>
        <ul className="text-lg list-disc">
          <li className="ml-12">Used for decision-making.
          </li>
          <li className="ml-12">Syntax:
          <CodeBlock
        language="python"
        code={`if condition:
    # Code to execute if condition is True
elif another_condition:
    # Code to execute if another_condition is True
else:
    # Code to execute if all conditions are False`}
        /></li>
          <li className="ml-12">Example:
          <CodeBlock
        language="python"
        code={`age = int(input("Enter your age: "))
if age >= 18:
    print("You are eligible to vote.")
else:
    print("You are not eligible to vote.")`}
        /></li>
        </ul>
        <h1 className="text-xl ml-4 mb-4"><b>B. Nested if-else</b></h1>
        <ul className="text-lg list-disc">
          
          <li className="ml-12">Example:
          <CodeBlock
        language="python"
        code={`num = int(input("Enter a number: "))
if num > 0:
    print("Positive number")
    if num % 2 == 0:
        print("Even number")
    else:
        print("Odd number")
elif num == 0:
    print("Zero")
else:
    print("Negative number")`}
        /></li>
        </ul>
        <h1 className="text-xl ml-4 mb-4"><b>C. Loops</b></h1>
        <ul className="text-lg list-disc">
          <li className="ml-12"><b>for Loop:</b> Used to iterate over a sequence (e.g., a list, range, or string).
          <ul className="text-lg list-disc">
          <li className="ml-12 hollow-disc">Syntax:
          <CodeBlock
        language="python"
        code={`for item in sequence:
    # Code to execute`}
        />
          </li>
          <li className="ml-12 hollow-disc">Example:
          <CodeBlock
        language="python"
        code={`for i in range(5):  # Prints numbers 0 to 4
    print(i)`}
        />
          </li>
          </ul>
          </li>
        </ul>

        <ul className="text-lg list-disc">
          <li className="ml-12"><b>while Loop:</b> Repeats a block of code as long as a condition is true.
          <ul className="text-lg list-disc">
          <li className="ml-12 hollow-disc">Syntax:
          <CodeBlock
        language="python"
        code={`while condition:
    # Code to execute`}
          />
          </li>
          <li className="ml-12 hollow-disc">Example:
          <CodeBlock
        language="python"
        code={`count = 0
while count < 5:
    print(count)
    count += 1`}
          />
          </li>
          </ul>
          </li>
        </ul>
        <h1 className="text-xl ml-4 mb-4"><b>D. break and continue</b></h1>
        <ul className="text-lg list-disc">
          <li className="ml-12"><b>break:</b> Exits the loop.</li>
          <li className="ml-12"><b>continue:</b> Skips the rest of the loop and moves to the next iteration.</li>
          <li className="ml-12">Example:
          <CodeBlock
        language="python"
        code={`for i in range(10):
    if i == 5:
        break  # Exit the loop when i is 5
    if i % 2 == 0:
        continue  # Skip even numbers
    print(i)`}
        />
          </li>
        
        
        <hr className="my-4 border-t border-gray-500" />
        
        <h1 className="text-2xl  mb-4"><b>5. Hands-On Practice with Functions</b></h1>
        Exercises:
        <ul className="text-lg list-decimal ">
          <li className="ml-12">Write a function to calculate the factorial of a number.</li>
          <CodeBlock
        language="python"
        code={`def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(factorial(5))  # Output: 120`}
        />
          <li className="ml-12">Write a function to check if a number is prime.</li>
          <CodeBlock
        language="python"
        code={`def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

print(is_prime(29))  # Output: True`}
        />
        <li className="ml-12">Write a function to print the Fibonacci sequence up to n terms.</li>
          <CodeBlock
        language="python"
        code={`def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b

fibonacci(10)  # Output: 0 1 1 2 3 5 8 13 21 34`}
        />
        </ul>
        </ul>
        <hr className="my-4 border-t border-gray-500" />
        <h1 className="text-2xl mb-4"><b>6. Recap</b></h1>
        <ul className="ml-10 text-lg list-disc">
        Recap what was covered:
          <li className="ml-10">if-else statements.</li>
          <li className="ml-10">Loops (for and while).</li>
          <li className="ml-10">Functions.</li>
        </ul>
        <hr className="my-4 border-t border-gray-500" />
        <h1 className="text-2xl  mb-4"><b>Homework</b></h1>
        <ul className="ml-10 text-lg list-decimal">
        Tasks to reinforce learning:
          <li className="ml-10">Write a program to find the largest of three numbers using if-else.</li>
          <li className="ml-10">Write a program to print the multiplication table of a number using a for loop.</li>
          <li className="ml-10">Write a function to calculate the area of a circle (area = πr²).</li>
        </ul>
        </ExpandableSection>

        <ExpandableSection title='Data Structures in Python'>
        <hr className="my-4 border-t border-gray-500" />
        <h1 className="text-2xl mb-4">1. Introduction to Data Structures</h1>
        
        </ExpandableSection>
        <GoToTopButton />
        
        <div>
              {/* Your existing content */}
              <CommentSection />
        </div>
      </div>
    );
  }