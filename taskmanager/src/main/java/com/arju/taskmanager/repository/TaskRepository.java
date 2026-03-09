package com.arju.taskmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arju.taskmanager.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}