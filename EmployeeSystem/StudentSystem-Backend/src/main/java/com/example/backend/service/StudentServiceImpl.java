package com.example.backend.service;

import com.example.backend.entity.Student;
import com.example.backend.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {
    StudentRepository studentRepository;
    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student getStudent(Long id) {
        return studentRepository.findById(id).get();
    }
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public String createStudent(Student student) {
        studentRepository.save(student);
        return "Created";
    }
    public String updateStudent(Student student) {
        studentRepository.save(student);
        return "Updated";
    }
    public String deleteStudent(Long id) {
        studentRepository.deleteById(id);
        return "Deleted";
    }
}
