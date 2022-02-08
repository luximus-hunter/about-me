import { execa } from 'execa';
import { writeFile } from 'fs';

(async () => {
    try {
        // checkout
        await execa('git', ['checkout', '--orphan', 'live']);

        // format
        console.log('📃 Formatting');
        await execa('npm', ['run', 'lint']);

        // build
        console.log('🚧 Building');
        await execa('npm', ['run', 'build']);

        // add CNAME
        await writeFile(`./build/CNAME`, 'lxms.nl', () => {});

        // add and commit
        await execa('git', ['--work-tree', 'build', 'add', '--all']);
        await execa('git', ['--work-tree', 'build', 'commit', '-m', '🌍 Live build ' + Date.now()]);

        // push to server
        console.log('🌍 Pushing');
        await execa('git', ['push', 'origin', 'HEAD:live', '--force']);
        await execa('git', ['checkout', '-f', 'master']);
        await execa('git', ['branch', '-D', 'live']);
        console.log('🚀 Deployed');
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
})();
