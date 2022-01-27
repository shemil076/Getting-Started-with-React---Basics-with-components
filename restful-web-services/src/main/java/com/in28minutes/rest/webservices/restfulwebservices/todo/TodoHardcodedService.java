package com.in28minutes.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {
    private static List<Todo> todos = new ArrayList<Todo>();

    private static int idCounter = 0;
    static {
        todos.add(new Todo(++idCounter, "in28minutes","Learn to dance", new Date(),false));
        todos.add(new Todo(++idCounter, "in28minutes","Learn to micro services", new Date(),false));
        todos.add(new Todo(++idCounter, "in28minutes","Learn to react", new Date(),false));

    }

    public List<Todo> findAll(){
        return todos;
    }
}
