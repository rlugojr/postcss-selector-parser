import {test} from './util/helpers';

test('comments', '/*test comment*/h2', (t, tree) => {
    t.deepEqual(tree.nodes[0].nodes[0].value, '/*test comment*/');
    t.deepEqual(tree.nodes[0].nodes[1].value, 'h2');
});

test('multiple comments and other things', 'h1/*test*/h2/*test*/.test/*test*/', (t, tree) => {
    t.deepEqual(tree.nodes[0].nodes[0].type, 'tag', 'should have a tag');
    t.deepEqual(tree.nodes[0].nodes[1].type, 'comment', 'should have a comment');
    t.deepEqual(tree.nodes[0].nodes[2].type, 'tag', 'should have a tag');
    t.deepEqual(tree.nodes[0].nodes[3].type, 'comment', 'should have a comment');
    t.deepEqual(tree.nodes[0].nodes[4].type, 'class', 'should have a class name');
    t.deepEqual(tree.nodes[0].nodes[5].type, 'comment', 'should have a comment');
});
