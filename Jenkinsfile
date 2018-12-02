// deployTargets = [:]
// deployTargets['dev'] = 's3'
// deployTargets['qa'] = 's3'
deployTargets['ext'] = 's3'
// deployTargets['prod'] = 's3'
// deployTargets['itau'] = 's3'

slackConfig = [:]
slackConfig['channel'] = '#deploy-front'

env.SKIP_TESTS = true
env.APP_NAME = 'bolt'

pismoPipeline(deployTargets, slackConfig, 'frontend')
