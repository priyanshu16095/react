package com.example.backend.service;

import com.example.backend.entity.Student;

import java.util.List;

public interface StudentService {
    public Student getStudent(Long id);
    public List<Student> getAllStudents();
    public String createStudent(Student student);
    public String updateStudent(Student student);
    public String deleteStudent(Long id);
}
