// <copyright file="TopicsController.cs" company="PlanGrid, Inc.">
//     Copyright (c) 2018 PlanGrid, Inc. All rights reserved.
// </copyright>

using System;
using System.Collections.Generic;
using System.Linq;
using BaseKay.Web.Server.Db;
using BaseKay.Web.Shared;
using Microsoft.AspNetCore.Mvc;

namespace BaseKay.Web.Server.Controllers
{
    [Route("api/[controller]")]
    public class TopicsController
    {

        [HttpGet("[action]")]
        public IEnumerable<Topic> Topics()
        {
            var db = new KbDb();

            return db.Topics.Select(x => new Topic
            {
                Id = x.Id,
                Body = x.Body,
                Created = x.Created,
                Title = x.Title,
                Updated = x.Updated
            });
        }        
    }
}