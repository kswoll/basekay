// <copyright file="KbDb.cs" company="PlanGrid, Inc.">
//     Copyright (c) 2018 PlanGrid, Inc. All rights reserved.
// </copyright>

using Microsoft.EntityFrameworkCore;

namespace BaseKay.Web.Server.Db
{
    public class KbDb : DbContext
    {
        public DbSet<DbTopic> Topics { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=kb.db");
        }
    }
}