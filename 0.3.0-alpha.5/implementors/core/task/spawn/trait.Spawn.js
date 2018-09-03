(function() {var implementors = {};
implementors["futures_executor"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/task/spawn/trait.Spawn.html\" title=\"trait core::task::spawn::Spawn\">Spawn</a> for <a class=\"struct\" href=\"futures_executor/struct.LocalSpawn.html\" title=\"struct futures_executor::LocalSpawn\">LocalSpawn</a>",synthetic:false,types:["futures_executor::local_pool::LocalSpawn"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/task/spawn/trait.Spawn.html\" title=\"trait core::task::spawn::Spawn\">Spawn</a> for <a class=\"struct\" href=\"futures_executor/struct.ThreadPool.html\" title=\"struct futures_executor::ThreadPool\">ThreadPool</a>",synthetic:false,types:["futures_executor::thread_pool::ThreadPool"]},];
implementors["futures_test"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/task/spawn/trait.Spawn.html\" title=\"trait core::task::spawn::Spawn\">Spawn</a> for <a class=\"struct\" href=\"futures_test/task/struct.NoopSpawner.html\" title=\"struct futures_test::task::NoopSpawner\">NoopSpawner</a>",synthetic:false,types:["futures_test::task::noop_spawner::NoopSpawner"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/task/spawn/trait.Spawn.html\" title=\"trait core::task::spawn::Spawn\">Spawn</a> for <a class=\"struct\" href=\"futures_test/task/struct.PanicSpawner.html\" title=\"struct futures_test::task::PanicSpawner\">PanicSpawner</a>",synthetic:false,types:["futures_test::task::panic_spawner::PanicSpawner"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/task/spawn/trait.Spawn.html\" title=\"trait core::task::spawn::Spawn\">Spawn</a> for <a class=\"struct\" href=\"futures_test/task/struct.RecordSpawner.html\" title=\"struct futures_test::task::RecordSpawner\">RecordSpawner</a>",synthetic:false,types:["futures_test::task::record_spawner::RecordSpawner"]},];
implementors["futures_util"] = [{text:"impl&lt;Ex&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/task/spawn/trait.Spawn.html\" title=\"trait core::task::spawn::Spawn\">Spawn03</a> for <a class=\"struct\" href=\"futures_util/compat/struct.Executor01As03.html\" title=\"struct futures_util::compat::Executor01As03\">Executor01As03</a>&lt;Ex&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ex: <a class=\"trait\" href=\"futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor01</a>&lt;<a class=\"type\" href=\"futures_util/compat/type.Executor01Future.html\" title=\"type futures_util::compat::Executor01Future\">Executor01Future</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ex: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["futures_util::compat::executor::Executor01As03"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/task/spawn/trait.Spawn.html\" title=\"trait core::task::spawn::Spawn\">Spawn</a> for <a class=\"struct\" href=\"futures_util/compat/struct.TokioDefaultSpawner.html\" title=\"struct futures_util::compat::TokioDefaultSpawner\">TokioDefaultSpawner</a>",synthetic:false,types:["futures_util::compat::tokio::TokioDefaultSpawner"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
