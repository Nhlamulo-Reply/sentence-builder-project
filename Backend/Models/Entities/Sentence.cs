

using Microsoft.EntityFrameworkCore;
using System;
using Backend.Models.Entities;
using Backend.Data;

namespace Backend.Data
{
    public class Sentence 
    {
        public int id { get; set; }
        public string? text { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public int UserId { get; set; }

        public User? User { get; set; }

    }

   
}