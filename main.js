students = [];

function submit(){
    var display_student=[];
    for (var j=1;j<=4;j++)
    {
        var students_name=document.getElementById("stud"+j).value;
        console.log(students_name);
        students.push(students_name);
    }
    var length_student=students.length;
    
    for (var k=0; k<length_student;k++)
    {
       display_student.push("<h4>NAME - "+students[k]+"</h4>");
       console.log(display_student);
    }


    document.getElementById("display_name_with_commas").innerHTML=display_student;
    var remove_comma=display_student.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting() { 
    students.sort(); 
    console.log(students); 
    var display_student_array_sorting = []; 
    var lenght_of_name_of_students_array = students.length; 
    console.log(lenght_of_name_of_students_array);
    
    for (var k = 0; k < lenght_of_name_of_students_array; k++) { 
        display_student_array_sorting.push("<h4>NAME - "+ students[k] + "</h4>"); 
        console.log(display_student_array_sorting); }

        var remove_commas = display_student_array_sorting.join(" "); 
        console.log(remove_commas); 
        document.getElementById("display_name_without_commas").innerHTML = remove_commas; }