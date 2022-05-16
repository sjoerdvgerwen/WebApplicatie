using Lean_To_Green.Core.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Lean_To_Green.Core.DataAccess;
using Lean_To_Green.Core.Logic;
using Lean_To_Green.Core.Interfaces;
using Lean_To_Green.Repository.Repositories;
using Lean_To_Green.Helpers;
using Microsoft.AspNetCore.Cors;

namespace Lean_To_Green
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddDbContext<FillDbContext>(options => options.UseMySQL(Configuration.GetConnectionString("Default")));
            services.AddTransient<MySqlConnection>(_ => new MySqlConnection(Configuration["ConnectionStrings:Default"]));
            services.AddTransient<HydroStationLogic>();
            services.AddTransient<SolarFieldLogic>();
            services.AddTransient<WindFarmLogic>();
            services.AddTransient<UserLogic>();
            services.AddTransient<ElectricStationLogic>();
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IHydroStationRepository, HydroStationRepository>();
            services.AddTransient<ISolarFieldRepository, SolarFieldRepository>();
            services.AddTransient<IWindFarmRepository, WindFarmRepository>();
            services.AddTransient<IElectricStationRepository, ElectricStationRepository>();
            services.AddTransient<JwtService>();

            services.AddControllers().AddNewtonsoftJson();

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                );
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Lean_To_Green", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(options => options
            .WithOrigins("https://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials());  // allow credentials
            
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
