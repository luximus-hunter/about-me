const execa = require('execa');
const fs = require('fs');

(async () => {
  try {
    await execa('git', ['checkout', '--orphan', 'live']);
    console.log('📃 Formatting');
    await execa('npm', ['run', 'lint']);
    console.log('🚧 Building');
    await execa('npm', ['run', 'build']);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync('dist') ? 'dist' : 'build';
    await execa('git', ['--work-tree', folderName, 'add', '--all']);
    await execa('git', ['--work-tree', folderName, 'commit', '-m', 'live']);
    console.log('🎈 Pushing to live');
    await execa('git', ['push', 'origin', 'HEAD:live', '--force']);
    // await execa("rm", ["-r", folderName]);
    await execa('git', ['checkout', '-f', 'master']);
    await execa('git', ['branch', '-D', 'live']);
    console.log('🚀 Successfully deployed');
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
