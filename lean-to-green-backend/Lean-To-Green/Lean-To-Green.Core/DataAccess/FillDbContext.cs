using Microsoft.EntityFrameworkCore;
using Lean_To_Green.Core.Entities;

namespace Lean_To_Green.Core.DataAccess
{
    public class FillDbContext : DbContext
    {
        public FillDbContext(DbContextOptions options) : base(options) { }
        public DbSet<HydroStation> HydroStation { get; set; }
        public DbSet<SolarField> SolarField { get; set; }
        public DbSet<WindFarm> WindFarm { get; set; }
        public DbSet<User> User { get; set; } 
        public DbSet<Comment> Comment { get; set; }
        public DbSet<ElectricStation> ElectricStation { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.Email).IsUnique();
            });
        }
        
    }
}
